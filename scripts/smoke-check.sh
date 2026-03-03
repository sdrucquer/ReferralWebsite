#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-}"

if [[ -z "$BASE_URL" ]]; then
  echo "Usage: $0 <base-url>"
  echo "Example: $0 https://your-preview.vercel.app"
  exit 1
fi

if [[ "$BASE_URL" == */ ]]; then
  BASE_URL="${BASE_URL%/}"
fi

check_status() {
  local path="$1"
  local expected="$2"
  local code
  code="$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$path")"
  if [[ "$code" != "$expected" ]]; then
    echo "[FAIL] $path expected $expected got $code"
    return 1
  fi
  echo "[PASS] $path status $code"
}

echo "Running smoke checks against: $BASE_URL"

check_status "/" "200"
check_status "/gusto" "200"
check_status "/reviews/payroll/gusto" "200"
check_status "/guides/setup-payroll-first-employee" "200"
check_status "/privacy" "200"
check_status "/terms" "200"
check_status "/disclosure" "200"
check_status "/sitemap.xml" "200"
check_status "/robots.txt" "200"

compare_html="$(curl -s "$BASE_URL/compare/gusto-vs-adp")"
if echo "$compare_html" | rg -qi 'name="robots" content="noindex, follow"|name="robots" content="noindex,follow"'; then
  echo "[PASS] /compare/gusto-vs-adp is noindex"
else
  echo "[FAIL] /compare/gusto-vs-adp missing expected noindex robots tag"
  exit 1
fi

sitemap_xml="$(curl -s "$BASE_URL/sitemap.xml")"
if echo "$sitemap_xml" | rg -q '/guides/setup-payroll-first-employee'; then
  echo "[PASS] sitemap includes ready guide"
else
  echo "[FAIL] sitemap missing ready guide"
  exit 1
fi

if echo "$sitemap_xml" | rg -q '/compare/gusto-vs-adp'; then
  echo "[FAIL] sitemap should exclude scaffold comparison"
  exit 1
else
  echo "[PASS] sitemap excludes scaffold comparison"
fi

echo "Smoke checks passed."
