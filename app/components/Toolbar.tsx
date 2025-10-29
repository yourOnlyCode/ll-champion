'use client';

import { formatText, wrapSelection, indentText } from '../utils/textFormatting';

interface ToolbarProps {
  editorRef: React.RefObject<HTMLDivElement>;
}

export default function Toolbar({ editorRef }: ToolbarProps) {
  const handleFormat = (command: string, value?: string) => {
    editorRef.current?.focus();
    formatText(command, value);
  };

  const handleIndent = (direction: 'indent' | 'outdent') => {
    if (editorRef.current) {
      editorRef.current.focus();
      indentText(editorRef.current, direction);
    }
  };

  return (
    <div className="flex items-center gap-1 p-3 border-b border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-800/50">
      {/* Text Formatting */}
      <div className="flex items-center gap-1 border-r border-amber-300 pr-3 mr-3">
        <button
          onClick={() => handleFormat('bold')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Bold"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3v14h5.5c2.5 0 4.5-2 4.5-4.5 0-1.5-.8-2.8-2-3.5 1.2-.7 2-2 2-3.5C15 3 13 1 10.5 1H5v2zm2 2h3.5c1.4 0 2.5 1.1 2.5 2.5S11.9 10 10.5 10H7V5zm0 7h4c1.7 0 3 1.3 3 3s-1.3 3-3 3H7v-6z"/>
          </svg>
        </button>
        <button
          onClick={() => handleFormat('italic')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Italic"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 1h8v2h-2.5L9.5 17H12v2H4v-2h2.5L10.5 3H8V1z"/>
          </svg>
        </button>
        <button
          onClick={() => handleFormat('underline')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Underline"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18c-4.4 0-8-3.6-8-8V2h2v8c0 3.3 2.7 6 6 6s6-2.7 6-6V2h2v8c0 4.4-3.6 8-8 8zM2 20h16v2H2v-2z"/>
          </svg>
        </button>
      </div>

      {/* Alignment */}
      <div className="flex items-center gap-1 border-r border-amber-300 pr-3 mr-3">
        <button
          onClick={() => handleFormat('justifyLeft')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Align Left"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4h16v2H2V4zm0 4h10v2H2V8zm0 4h16v2H2v-2zm0 4h10v2H2v-2z"/>
          </svg>
        </button>
        <button
          onClick={() => handleFormat('justifyCenter')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Center"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4h16v2H2V4zm3 4h10v2H5V8zm-3 4h16v2H2v-2zm3 4h10v2H5v-2z"/>
          </svg>
        </button>
        <button
          onClick={() => handleFormat('justifyRight')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Align Right"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4h16v2H2V4zm6 4h10v2H8V8zm-6 4h16v2H2v-2zm6 4h10v2H8v-2z"/>
          </svg>
        </button>
      </div>

      {/* Lists */}
      <div className="flex items-center gap-1 border-r border-amber-300 pr-3 mr-3">
        <button
          onClick={() => handleFormat('insertUnorderedList')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Bullet List"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 6a2 2 0 100-4 2 2 0 000 4zM6 8h12v2H6V8zm-2 4a2 2 0 100-4 2 2 0 000 4zm2 2h12v2H6v-2zm-2 4a2 2 0 100-4 2 2 0 000 4z"/>
          </svg>
        </button>
        <button
          onClick={() => handleFormat('insertOrderedList')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Numbered List"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4h1v4H3V6H2V5h1V4zm1 8H3v1h1v1H2v1h2v-4zm-1 6H2v1h2v-1H3v-1h1v-1H2v1h1v1zM6 4h12v2H6V4zm0 6h12v2H6v-2zm0 6h12v2H6v-2z"/>
          </svg>
        </button>
      </div>

      {/* Indentation */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleIndent('outdent')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Decrease Indent"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4h16v2H2V4zm4 4h12v2H6V8zm-4 4h16v2H2v-2zm4 4h12v2H6v-2zM2 8l4 2-4 2V8z"/>
          </svg>
        </button>
        <button
          onClick={() => handleIndent('indent')}
          className="p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded"
          title="Increase Indent"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4h16v2H2V4zm4 4h12v2H6V8zm-4 4h16v2H2v-2zm4 4h12v2H6v-2zM6 8L2 10l4 2V8z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}