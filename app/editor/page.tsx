'use client';

import { useState, useEffect } from 'react';
import RichTextEditor from '../components/RichTextEditor';

export default function ElegantEditor() {
  const [content, setContent] = useState('');
  const [docId, setDocId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [error, setError] = useState('');

  const loadFromGoogleDoc = async () => {
    if (!docId) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`/api/google-doc?docId=${docId}`);
      const data = await response.json();
      
      if (response.ok) {
        setContent(data.content || '');
        setError('');
      } else {
        setError(data.error || 'Failed to load document');
      }
    } catch (error) {
      console.error('Failed to load document:', error);
      setError('Network error. Please try again.');
    }
    setIsLoading(false);
  };

  const saveContent = async () => {
    setIsSaving(true);
    try {
      await fetch('/api/save-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, docId })
      });
    } catch (error) {
      console.error('Failed to save:', error);
    }
    setIsSaving(false);
  };

  useEffect(() => {
    const autoSave = setInterval(() => {
      if (content) saveContent();
    }, 30000);
    return () => clearInterval(autoSave);
  }, [content]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900 dark:to-orange-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-amber-900/80 backdrop-blur-sm border-b border-amber-200 dark:border-amber-700">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-800 dark:text-amber-200">
              Elegant Editor
            </h1>
            
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
                  onClick={loadFromGoogleDoc}
                  disabled={isLoading || !docId}
                  className="px-2 py-1 bg-amber-600 text-white rounded text-sm hover:bg-amber-700 disabled:opacity-50"
                >
                  {isLoading ? 'Loading...' : 'Load'}
                </button>
                <button
                  onClick={() => setShowInstructions(!showInstructions)}
                  className="px-2 py-1 text-amber-600 hover:text-amber-700 text-sm"
                >
                  ?
                </button>
              </div>
              
              <div className="flex items-center justify-between sm:gap-4">
                <span className="text-xs sm:text-sm text-amber-600">
                  {isSaving ? 'Saving...' : 'Auto-saved'}
                </span>
                <button
                  onClick={saveContent}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-amber-600 text-white rounded hover:bg-amber-700 text-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Instructions */}
      {showInstructions && (
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="bg-amber-100 dark:bg-amber-800 border border-amber-300 dark:border-amber-600 rounded-lg p-4">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">How to share your Google Doc:</h3>
            <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
              <li>1. Open your Google Doc</li>
              <li>2. Click "Share" button (top right)</li>
              <li>3. Change access to "Anyone with the link can view"</li>
              <li>4. Copy the document ID from the URL (between /d/ and /edit)</li>
              <li>5. Paste the ID above and click Load</li>
            </ol>
          </div>
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div className="max-w-4xl mx-auto px-6 py-2">
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded">
            {error}
          </div>
        </div>
      )}

      {/* Editor */}
      <main className="max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-8">
        <RichTextEditor
          content={content}
          onChange={setContent}
          placeholder="Begin your story here..."
        />
        
        {/* Writing Stats */}
        <div className="mt-4 flex justify-between text-xs sm:text-sm text-amber-600 dark:text-amber-400">
          <span>Words: {content.replace(/<[^>]*>/g, '').split(/\s+/).filter(word => word.length > 0).length}</span>
          <span>Characters: {content.replace(/<[^>]*>/g, '').length}</span>
        </div>
      </main>
    </div>
  );
}