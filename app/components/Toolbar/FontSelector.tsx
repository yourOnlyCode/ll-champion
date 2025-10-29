'use client';

import { useState, useRef, useEffect } from 'react';

interface FontSelectorProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
}

const defaultFonts = [
  { name: 'Georgia', value: 'Georgia, serif' },
  { name: 'Times New Roman', value: 'Times New Roman, serif' },
  { name: 'Arial', value: 'Arial, sans-serif' },
  { name: 'Helvetica', value: 'Helvetica, sans-serif' },
  { name: 'Courier New', value: 'Courier New, monospace' },
  { name: 'Verdana', value: 'Verdana, sans-serif' },
];

export default function FontSelector({ editorRef }: FontSelectorProps) {
  const [selectedFont, setSelectedFont] = useState('Georgia');
  const [fontDropdownOpen, setFontDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [fonts, setFonts] = useState(defaultFonts);
  const fontButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const loadSystemFonts = async () => {
      try {
        if ('queryLocalFonts' in window) {
          const systemFonts = await (window as any).queryLocalFonts();
          const fontList = systemFonts
            .map((font: any) => ({
              name: font.family,
              value: `"${font.family}", sans-serif`
            }))
            .filter((font: any, index: number, arr: any[]) => 
              arr.findIndex(f => f.name === font.name) === index
            )
            .sort((a: any, b: any) => a.name.localeCompare(b.name));
          
          setFonts([...defaultFonts, ...fontList]);
        }
      } catch (error) {
        console.log('Font Access API not available, using default fonts');
      }
    };
    
    loadSystemFonts();
  }, []);

  const handleFontChange = (font: typeof defaultFonts[0]) => {
    setSelectedFont(font.name);
    setFontDropdownOpen(false);
    if (editorRef.current) {
      editorRef.current.style.fontFamily = font.value;
      editorRef.current.focus();
    }
  };

  return (
    <div className="relative z-50">
      <button
        ref={fontButtonRef}
        onClick={() => {
          if (!fontDropdownOpen && fontButtonRef.current) {
            const rect = fontButtonRef.current.getBoundingClientRect();
            setDropdownPosition({
              top: rect.bottom + window.scrollY,
              left: rect.left + window.scrollX
            });
          }
          setFontDropdownOpen(!fontDropdownOpen);
        }}
        className="px-3 py-2 bg-white border border-amber-300 rounded text-sm hover:bg-amber-50 flex items-center gap-2 min-w-[120px]"
      >
        <span>{selectedFont}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {fontDropdownOpen && (
        <div 
          className="fixed bg-white border border-amber-300 rounded shadow-lg min-w-[160px]"
          style={{
            top: `${dropdownPosition.top + 4}px`,
            left: `${dropdownPosition.left}px`,
            zIndex: 9999
          }}
        >
          {fonts.map((font) => (
            <button
              key={font.name}
              onClick={() => handleFontChange(font)}
              className="block w-full px-3 py-2 text-left text-sm hover:bg-amber-50"
              style={{ fontFamily: font.value }}
            >
              {font.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}