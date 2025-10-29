'use client';

import { useState } from 'react';
import ExportButton from '../ExportButton';

interface EditorControlsProps {
  content: string;
  onContentChange: (content: string) => void;
  onLoadDoc: (docId: string) => void;
  onSave: () => void;
  isLoading: boolean;
  isSaving: boolean;
  onShowInstructions: (show: boolean) => void;
  showInstructions: boolean;
}

export default function EditorControls({ 
  content, 
  onLoadDoc, 
  onSave, 
  isLoading, 
  isSaving, 
  onShowInstructions, 
  showInstructions 
}: EditorControlsProps) {
  const [docId, setDocId] = useState('');

  const handleLoad = () => {
    if (docId) onLoadDoc(docId);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Google Doc ID"
          value={docId}
          onChange={(e) => setDocId(e.target.value)}
          className="flex-1 sm:w-32 px-2 py-1 border border-amber-300 rounded text-sm"
        />
        <button
          onClick={handleLoad}
          disabled={isLoading || !docId}
          className="px-2 py-1 bg-amber-600 text-white rounded text-sm hover:bg-amber-700 disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Load'}
        </button>
        <button
          onClick={() => onShowInstructions(!showInstructions)}
          className="px-2 py-1 text-amber-600 hover:text-amber-700 text-sm"
        >
          ?
        </button>
      </div>
      
      <div className="flex items-center justify-between sm:gap-4">
        <span className="text-xs sm:text-sm text-amber-600">
          {isSaving ? 'Saving...' : 'Auto-saved'}
        </span>
        <div className="flex gap-2">
          <ExportButton text={content.replace(/<[^>]*>/g, '')} filename="document" />
          <button
            onClick={onSave}
            className="px-3 py-1 sm:px-4 sm:py-2 bg-amber-600 text-white rounded hover:bg-amber-700 text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}