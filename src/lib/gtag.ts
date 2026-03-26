declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-2RQMC7PKQ9";

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

export const trackCTA = (label: string) =>
  trackEvent("cta_click", { event_category: "CTA", event_label: label });

export const trackFormSubmit = (label: string) =>
  trackEvent("form_submit", { event_category: "Lead", event_label: label });
