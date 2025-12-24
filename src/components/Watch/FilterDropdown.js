"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./FilterDropdown.module.css";

/**
 * FilterDropdown
 * ---------------------------------------------------------------------------
 * A reusable, accessible dropdown component for multi-select filtering.
 * Provides smooth scrolling, keyboard navigation, and click-outside-to-close.
 *
 * Props:
 *  - label (string)           : Button label shown when dropdown is closed.
 *  - options (array)          : List of option objects with { value, label }.
 *  - selectedValues (array)   : Currently selected option values.
 *  - onToggle (function)      : Callback when an option is toggled: (value) => void.
 *  - renderOption (function)  : Optional custom renderer: (option, isSelected) => ReactNode.
 */
export default function FilterDropdown({
  label,
  options,
  selectedValues,
  onToggle,
  renderOption,
}) {
  // -------------------------------------------------------------------------
  // State & Refs
  // -------------------------------------------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // -------------------------------------------------------------------------
  // Close dropdown when clicking outside
  // -------------------------------------------------------------------------
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // -------------------------------------------------------------------------
  // Keyboard support (Escape to close)
  // -------------------------------------------------------------------------
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // -------------------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------------------
  const selectedCount = selectedValues.length;
  const hasSelection = selectedCount > 0;

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  return (
    <div className={styles.dropdownContainer} ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${styles.triggerButton} ${hasSelection ? styles.triggerButtonActive : ""}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.triggerLabel}>
          {label}
          {hasSelection && (
            <span className={styles.badge}>{selectedCount}</span>
          )}
        </span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <ul
          className={styles.optionsPanel}
          role="listbox"
          aria-multiselectable="true"
          tabIndex={-1}
        >
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value);

            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={`${styles.optionButton} ${isSelected ? styles.optionButtonSelected : ""}`}
                  onClick={() => onToggle(option.value)}
                >
                  {/* Checkbox indicator */}
                  <span className={`${styles.checkbox} ${isSelected ? styles.checkboxChecked : ""}`}>
                    {isSelected && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>

                  {/* Option content */}
                  <span className={styles.optionContent}>
                    {renderOption ? renderOption(option, isSelected) : option.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
