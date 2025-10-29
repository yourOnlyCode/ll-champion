'use client';

import { useRef, useEffect } from 'react';
import Toolbar from './Toolbar';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== content) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          document.execCommand('bold');
          break;
        case 'i':
          e.preventDefault();
          document.execCommand('italic');
          break;
        case 'u':
          e.preventDefault();
          document.execCommand('underline');
          break;
      }
    }
  };

  return (
    <div className="bg-white dark:bg-amber-900 rounded-lg shadow-xl border border-amber-200 dark:border-amber-700 min-h-[600px] overflow-hidden">
      <Toolbar editorRef={editorRef} />
      
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="p-8 min-h-[500px] outline-none text-lg leading-relaxed font-serif text-amber-900 dark:text-amber-100 prose prose-amber max-w-none"
        style={{ 
          fontFamily: 'Georgia, serif',
          lineHeight: '1.8'
        }}
        data-placeholder={placeholder}
      />
      
      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #d97706;
          opacity: 0.6;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}