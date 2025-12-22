import React from "react";

export default function SearchBar({ value, onChange, className, placeholder = "Search talks, speakers, or events..." }) {
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
