import { test, expect } from "@playwright/test";

test("homepage contains top payroll CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /see our top pick for payroll/i })).toBeVisible();
});

test("gusto page shows bonus copy and faq", async ({ page }) => {
  await page.goto("/gusto");
  await expect(page.getByRole("heading", { name: /get a \$200 visa gift card/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /frequently asked questions/i })).toBeVisible();
});

test("footer links to legal pages", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /affiliate disclosure/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /privacy policy/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /terms of use/i })).toBeVisible();
});
