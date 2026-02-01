'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics() {
  const [cookieConsent, setCookieConsent] = useState(null);
  const [gtagLoaded, setGtagLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check initial consent state
    const savedConsent = localStorage.getItem('cookie-consent');
    
    if (savedConsent) {
      setCookieConsent(JSON.parse(savedConsent));
    } else {
      setCookieConsent(true);
    }

    // Listen for real-time consent changes from the banner
    const handleConsentChange = (event) => {
      const newConsent = event.detail.consent;
      setCookieConsent(newConsent);

      // If user disables analytics, stop gtag
      if (!newConsent) {
        disableAnalytics();
      }
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange);

    // Also listen for localStorage changes (multi-tab support)
    const handleStorageChange = (e) => {
      if (e.key === 'cookie-consent' && e.newValue) {
        const newConsent = JSON.parse(e.newValue);
        setCookieConsent(newConsent);
        
        if (!newConsent) {
          disableAnalytics();
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const disableAnalytics = () => {
    // Clear analytics data when user opts out
    if (window.dataLayer) {
      window.dataLayer = [];
    }
    // Remove gtag scripts
    const gtagScripts = document.querySelectorAll('script[src*="googletagmanager"]');
    gtagScripts.forEach(script => script.remove());
    delete window.gtag;
  };

  // Only load gtag if consent is explicitly true and not already loaded
  if (!isClient || cookieConsent !== true || gtagLoaded) {
    return null;
  }

  setGtagLoaded(true);

  return (
    <>
      {/* Google Analytics - gtag.js */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E46SH2LTF1"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E46SH2LTF1');
          `,
        }}
      />
    </>
  );
}
