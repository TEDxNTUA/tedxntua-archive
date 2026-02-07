'use client';

import { useEffect, useState } from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [cookieConsent, setCookieConsent] = useState(null);
  const [tempConsent, setTempConsent] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if user has a saved preference in localStorage
    const savedConsent = localStorage.getItem('cookieConsent');
    
    if (savedConsent !== null) {
      // Load saved preference
      const consent = JSON.parse(savedConsent);
      setCookieConsent(consent);
      setTempConsent(consent);
    } else {
      // First visit - default to ON (tracking enabled) until user explicitly changes
      setCookieConsent(true);
      setTempConsent(true);
    }
    
    // Keep widget expanded at all times
    setIsExpanded(true);
  }, []);

  const handleToggle = () => {
    // Only update temporary state, don't save to localStorage yet
    setTempConsent(prev => !prev);
  };

  const handleAccept = () => {
    // Start closing animation
    setIsClosing(true);
    
    // Save consent preference to localStorage
    localStorage.setItem('cookieConsent', JSON.stringify(tempConsent));
    
    // Update the current session state
    setCookieConsent(tempConsent);
    setHasInteracted(true);

    // Trigger a custom event so GoogleAnalytics component can react
    window.dispatchEvent(
      new CustomEvent('cookieConsentChanged', { detail: { consent: tempConsent } })
    );
  };

  const handleCollapse = () => {
    // Widget stays expanded - users must make a choice by clicking Accept
    // This ensures they can't skip the permission prompt
  };

  const toggleExpand = () => {
    // Widget is always expanded - disable toggle
    return;
  };

  if (!isClient) return null;

  return (
    <div className={`${styles.cookieWidget} ${styles.expanded} ${isClosing ? styles.fadeOut : ''}`}>
      {/* Always show expanded view - users MUST make a choice */}
      {true && (
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
                  checked={tempConsent !== null ? tempConsent : false}
                  onChange={handleToggle}
                  className={styles.toggleCheckbox}
                  aria-label="Toggle analytics"
                />
                <span className={styles.toggleSwitch}></span>
                <span className={styles.toggleText}>
                  {tempConsent ? 'Analytics ON' : 'Analytics OFF'}
                </span>
              </label>
            </div>
            <div className={styles.warningMessage}>
              ⚠️ You must click "Accept & Close" for your toggle changes to take effect
            </div>

            {/* Accept button */}
            <div className={styles.buttonGroup}>
              <button
                onClick={handleAccept}
                className={styles.acceptBtn}
              >
                Accept & Close
              </button>
            </div>
          </div>

          {/* Status indicator */}
          <div className={`${styles.statusIndicator} ${tempConsent ? styles.statusActive : styles.statusInactive}`}>
            {tempConsent ? 'Analytics enabled' : 'Analytics disabled'}
          </div>
        </div>
      )}
    </div>
  );
}
