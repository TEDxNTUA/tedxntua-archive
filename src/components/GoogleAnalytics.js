'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics() {
  const [cookieConsent, setCookieConsent] = useState(null);
  const [gtmLoaded, setGtmLoaded] = useState(false);
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

      // If user disables tracking, stop GTM
      if (!newConsent) {
        disableGTM();
      }
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange);

    // Also listen for localStorage changes (multi-tab support)
    const handleStorageChange = (e) => {
      if (e.key === 'cookie-consent' && e.newValue) {
        const newConsent = JSON.parse(e.newValue);
        setCookieConsent(newConsent);
        
        if (!newConsent) {
          disableGTM();
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const disableGTM = () => {
    // Clear GTM data when user opts out
    if (window.dataLayer) {
      window.dataLayer = [];
    }
    if (window.google_tag_manager) {
      delete window.google_tag_manager;
    }
    // Remove GTM scripts
    const gtmScripts = document.querySelectorAll('script[src*="googletagmanager"]');
    gtmScripts.forEach(script => script.remove());
  };

  // Only load GTM if consent is explicitly true and not already loaded
  if (!isClient || cookieConsent !== true || gtmLoaded) {
    return null;
  }

  setGtmLoaded(true);

  return (
    <>
      {/* Google Tag Manager Script - Only loads when consent is true */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDQQ8BZ4');`,
        }}
      />

      {/* Google Tag Manager (noscript) - Fallback for users without JS */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PDQQ8BZ4"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
