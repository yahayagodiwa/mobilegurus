"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Country = {
  name: string;
  code: string; // +234
  flag: string; // public/images/flags/ng.png
};

const countries: Country[] = [
  { name: "Nigeria", code: "+234", flag: "/flags/ng.png" },
  { name: "United States", code: "+1", flag: "/flags/us.png" },
  { name: "United Kingdom", code: "+44", flag: "/flags/uk.png" },
  { name: "Ghana", code: "+233", flag: "/flags/gh.png" },
];

interface Props {
  value?: Country;
  onSelect: (country: Country) => void;
}

export default function CountrySelect({ value, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border rounded-md px-3 py-2 bg-white w-[110px]"
      >
        {value ? (
          <>
            <Image src={value.flag} alt="" width={20} height={16} className="rounded-sm" />
            <span className="text-sm">{value.code}</span>
          </>
        ) : (
          <span className="text-sm text-gray-500">Country</span>
        )}
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-40 bg-white border rounded-md shadow-md">
          {countries.map((c) => (
            <div
              key={c.code}
              onClick={() => {
                onSelect(c);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <Image src={c.flag} alt="" width={20} height={16} className="rounded-sm" />
              <span className="text-sm">{c.name}</span>
              <span className="text-xs text-gray-400 ml-auto">{c.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
