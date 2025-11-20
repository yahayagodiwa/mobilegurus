"use client";

import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  label: string;
  items: string[];
  onSelect?: (value: string) => void;
}

export default function Dropdown({ label, items, onSelect }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 border rounded-md bg-white hover:bg-gray-100"
      >
        {label}
      </button>

      {open && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white border z-20">
          <ul className="py-2">
            {items.map((item) => (
              <li
                key={item}
                onClick={() => {
                  onSelect?.(item);
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
