import React from "react";

/**
 * SearchBar
 * A small, reusable search input used by the Watch page.
 * Props:
 * - value: current input value
 * - onChange: change handler (receives the event)
 * - className: CSS classes to apply
 * - placeholder: optional placeholder text
 */
export default function SearchBar({ value, onChange, className, placeholder = "Search talks, speakers, or events..." }) {
  return (
    <input
      type="search"
      aria-label="Search talks"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
