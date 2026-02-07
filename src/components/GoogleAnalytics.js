'use client';

import Script from 'next/script';
import { useEffect, useState, useRef } from 'react';

export default function GoogleAnalytics() {
  const [cookieConsent, setCookieConsent] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const gtagLoadedRef = useRef(false);

  useEffect(() => {
    setIsClient(true);

    // Check initial consent state from localStorage
    const savedConsent = localStorage.getItem('cookie-consent');
    
    if (savedConsent) {
      const consent = JSON.parse(savedConsent);
      setCookieConsent(consent);
      // Initialize gtag if consent is true
      if (consent === true) {
        initializeGtag();
      }
    }

    // Listen for real-time consent changes from the banner
    const handleConsentChange = (event) => {
      const newConsent = event.detail.consent;
      setCookieConsent(newConsent);

      if (newConsent === true) {
        initializeGtag();
      } else {
        // If user disables analytics, disable gtag
        disableAnalytics();
      }
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange);

    // Also listen for localStorage changes (multi-tab support)
    const handleStorageChange = (e) => {
      if (e.key === 'cookie-consent' && e.newValue) {
        const newConsent = JSON.parse(e.newValue);
        setCookieConsent(newConsent);
        
        if (newConsent === true) {
          initializeGtag();
        } else {
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
    // Disable gtag if it exists
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  const initializeGtag = () => {
    // Prevent multiple initializations
    if (gtagLoadedRef.current) {
      return;
    }

    // Initialize dataLayer if not already present
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Create gtag function
    if (!window.gtag) {
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
    }

    // Set consent and configure analytics
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
    window.gtag('js', new Date());
    window.gtag('config', 'G-E46SH2LTF1', {
      'page_path': window.location.pathname
    });

    gtagLoadedRef.current = true;
  };

  // Don't render anything - scripts are loaded conditionally
  // Only load gtag script if consent is explicitly true
  if (!isClient || cookieConsent !== true) {
    return null;
  }

  return (
    <>
      {/* Google Analytics - gtag.js - Only loads if consent is true */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E46SH2LTF1"
        strategy="afterInteractive"
        onLoad={() => {
          // Ensure gtag is configured after script loads
          if (window.gtag) {
            window.gtag('config', 'G-E46SH2LTF1', {
              'page_path': window.location.pathname
            });
          }
        }}
      />
    </>
  );
}
