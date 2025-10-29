'use client';

import { useState, useRef } from 'react';

interface TextSizeSelectorProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
}

const textSizes = [
  { name: '12px', value: '12px' },
  { name: '14px', value: '14px' },
  { name: '16px', value: '16px' },
  { name: '18px', value: '18px' },
  { name: '20px', value: '20px' },
  { name: '24px', value: '24px' },
  { name: '28px', value: '28px' },
  { name: '32px', value: '32px' },
];

export default function TextSizeSelector({ editorRef }: TextSizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState('18px');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSizeChange = (size: typeof textSizes[0]) => {
    setSelectedSize(size.name);
    setDropdownOpen(false);
    if (editorRef.current) {
      editorRef.current.style.fontSize = size.value;
      editorRef.current.focus();
    }
  };

  return (
    <div className="relative z-50">
      <button
        ref={buttonRef}
        onClick={() => {
          if (!dropdownOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPosition({
              top: rect.bottom + window.scrollY,
              left: rect.left + window.scrollX
            });
          }
          setDropdownOpen(!dropdownOpen);
        }}
        className="px-3 py-2 bg-white border border-amber-300 rounded text-sm hover:bg-amber-50 flex items-center gap-2 min-w-[80px]"
      >
        <span>{selectedSize}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {dropdownOpen && (
        <div 
          className="fixed bg-white border border-amber-300 rounded shadow-lg min-w-[100px]"
          style={{
            top: `${dropdownPosition.top + 4}px`,
            left: `${dropdownPosition.left}px`,
            zIndex: 9999
          }}
        >
          {textSizes.map((size) => (
            <button
              key={size.name}
              onClick={() => handleSizeChange(size)}
              className="block w-full px-3 py-2 text-left text-sm hover:bg-amber-50"
              style={{ fontSize: size.value }}
            >
              {size.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}