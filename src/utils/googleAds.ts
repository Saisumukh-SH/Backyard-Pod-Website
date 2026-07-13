declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackContactConversion = () => {
  if (!window.gtag) return;

  window.gtag("event", "conversion", {
    send_to: "AW-18311039639/CKlzCPbFrs8cEJeVsZtE",
    value: 1.0,
    currency: "AUD",
  });
};