import type { CTAEventPayload } from "@/types/analytics";

interface DataLayerEvent extends CTAEventPayload {
  event: "cta_click";
}

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackCtaClick(payload: CTAEventPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const event: DataLayerEvent = {
    event: "cta_click",
    ...payload
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);

  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_click", payload);
  }
}
