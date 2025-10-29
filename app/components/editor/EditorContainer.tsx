'use client';

import { useState, useEffect } from 'react';
import EditorHeader from './EditorHeader';
import Instructions from './Instructions';
import ErrorMessage from './ErrorMessage';
import EditorMain from './EditorMain';

export default function EditorContainer() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [error, setError] = useState('');

  const loadFromGoogleDoc = async (docId: string) => {
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
        body: JSON.stringify({ content })
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
    <>
      <EditorHeader
        content={content}
        onContentChange={setContent}
        onLoadDoc={loadFromGoogleDoc}
        onSave={saveContent}
        isLoading={isLoading}
        isSaving={isSaving}
        onShowInstructions={setShowInstructions}
        showInstructions={showInstructions}
      />
      
      {showInstructions && <Instructions />}
      {error && <ErrorMessage error={error} />}
      
      <EditorMain content={content} onChange={setContent} />
    </>
  );
}