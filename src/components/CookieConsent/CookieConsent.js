'use client';

import { useEffect, useState } from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [cookieConsent, setCookieConsent] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if user has already interacted with widget
    const hasSeenWidget = localStorage.getItem('cookie-widget-seen');
    const savedConsent = localStorage.getItem('cookie-consent');
    
    if (hasSeenWidget) {
      setIsExpanded(false);
      setHasInteracted(true);
    }
    
    if (savedConsent) {
      setCookieConsent(JSON.parse(savedConsent));
    } else {
      // Default to accepted on first visit
      setCookieConsent(true);
      localStorage.setItem('cookie-consent', JSON.stringify(true));
    }

    // Listen for storage changes from other tabs
    const handleStorageChange = (e) => {
      if (e.key === 'cookie-consent' && e.newValue) {
        setCookieConsent(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleToggle = () => {
    const newConsent = !cookieConsent;
    setCookieConsent(newConsent);
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    
    // Mark as interacted and collapse
    localStorage.setItem('cookie-widget-seen', 'true');
    setIsExpanded(false);
    setHasInteracted(true);

    // Trigger a custom event so GoogleAnalytics component can react
    window.dispatchEvent(
      new CustomEvent('cookieConsentChanged', { detail: { consent: newConsent } })
    );
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(true));
    localStorage.setItem('cookie-widget-seen', 'true');
    setCookieConsent(true);
    setIsExpanded(false);
    setHasInteracted(true);

    window.dispatchEvent(
      new CustomEvent('cookieConsentChanged', { detail: { consent: true } })
    );
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    localStorage.setItem('cookie-widget-seen', 'true');
    setHasInteracted(true);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isClient) return null;

  return (
    <div className={`${styles.cookieWidget} ${isExpanded ? styles.expanded : styles.compact}`}>
      {/* Compact view - Always visible, very small */}
      {!isExpanded && (
        <button
          onClick={toggleExpand}
          className={styles.compactWidget}
          title="Click to manage analytics preferences"
        >
          <span className={styles.compactText}>
            {cookieConsent ? '🍪 ON' : '🍪 OFF'}
          </span>
        </button>
      )}

      {/* Expanded view - Full widget */}
      {isExpanded && (
        <div className={styles.widgetContent}>
          <div className={styles.widgetHeader}>
            <div className={styles.titleSection}>
              <h3 className={styles.widgetTitle}>📊 Understand How You Use Our Site</h3>
              <p className={styles.widgetSubtitle}>
                Help us make TEDxNTUA better for you
              </p>
            </div>
          </div>

          {/* Details section - Always visible when expanded */}
          <div className={styles.detailsSection}>
            <p className={styles.detailsTitle}>
              <strong>What we learn:</strong>
            </p>
            <ul className={styles.detailsList}>
              <li>Which pages are most popular</li>
              <li>How visitors navigate the site</li>
              <li>Browser and device information</li>
              <li>General location (city level only)</li>
            </ul>

            <p className={styles.detailsTitle}>
              <strong>What we never collect:</strong>
            </p>
            <ul className={styles.detailsList}>
              <li>✅ Your passwords or login info</li>
              <li>✅ Payment or credit card data</li>
              <li>✅ Personal information (names, emails)</li>
            </ul>

            <div className={styles.legalText}>
              <p>
                You can change this setting anytime.{' '}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className={styles.policyLink}>
                  Privacy Policy
                </a>
                {' '}•{' '}
                <a href="/cookies-policy" target="_blank" rel="noopener noreferrer" className={styles.policyLink}>
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>

          {/* Toggle and buttons */}
          <div className={styles.controlsSection}>
            <div className={styles.toggleSection}>
              <label className={styles.toggleLabel}>
                <input
                  type="checkbox"
                  checked={cookieConsent}
                  onChange={handleToggle}
                  className={styles.toggleCheckbox}
                  aria-label="Toggle analytics"
                />
                <span className={styles.toggleSwitch}></span>
                <span className={styles.toggleText}>
                  {cookieConsent ? 'Analytics ON' : 'Analytics OFF'}
                </span>
              </label>
            </div>

            {/* Accept and Collapse buttons */}
            <div className={styles.buttonGroup}>
              <button
                onClick={handleCollapse}
                className={styles.minimizeBtn}
                title="Minimize widget"
              >
                Minimize
              </button>
              <button
                onClick={handleAccept}
                className={styles.acceptBtn}
              >
                Accept & Close
              </button>
            </div>
          </div>

          {/* Status indicator */}
          <div className={`${styles.statusIndicator} ${cookieConsent ? styles.statusActive : styles.statusInactive}`}>
            {cookieConsent ? 'Analytics enabled' : 'Analytics disabled'}
          </div>
        </div>
      )}
    </div>
  );
}
