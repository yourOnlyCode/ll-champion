'use client';

import { useState } from 'react';
import { ImportService, ImportSource } from '../services/import/importService';

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (content: string, title?: string) => void;
}

export default function ImportModal({ isOpen, onClose, onImport }: ImportModalProps) {
  const [activeTab, setActiveTab] = useState<ImportSource>('google-docs');
  const [loading, setLoading] = useState(false);
  const [googleDocId, setGoogleDocId] = useState('');
  const [wattpadUrl, setWattpadUrl] = useState('');

  if (!isOpen) return null;

  const handleImport = async () => {
    setLoading(true);
    try {
      let result;
      
      switch (activeTab) {
        case 'google-docs':
          result = await ImportService.importFromGoogleDocs(googleDocId);
          break;
        case 'wattpad':
          result = await ImportService.importFromWattpad(wattpadUrl);
          break;
        default:
          throw new Error('Import method not implemented');
      }
      
      onImport(result.content, result.title);
      onClose();
    } catch (error) {
      console.error('Import failed:', error);
      alert('Import failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      let result;
      
      if (file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
        result = await ImportService.importFromWord(file);
      } else {
        result = await ImportService.importFromFile(file);
      }
      
      onImport(result.content, result.title);
      onClose();
    } catch (error) {
      console.error('File import failed:', error);
      alert('File import failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-amber-900 rounded-lg max-w-md w-full mx-4 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-serif font-bold text-amber-900 dark:text-amber-100">
            Import Content
          </h2>
          <button onClick={onClose} className="text-amber-600 hover:text-amber-800">
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex mb-4 border-b border-amber-200">
          {[
            { id: 'google-docs', label: 'Google Docs' },
            { id: 'microsoft-word', label: 'Word File' },
            { id: 'wattpad', label: 'Wattpad' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ImportSource)}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === tab.id
                  ? 'border-amber-600 text-amber-600'
                  : 'border-transparent text-amber-500 hover:text-amber-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mb-6">
          {activeTab === 'google-docs' && (
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                Google Doc ID
              </label>
              <input
                type="text"
                value={googleDocId}
                onChange={(e) => setGoogleDocId(e.target.value)}
                placeholder="Enter document ID from URL"
                className="w-full px-3 py-2 border border-amber-300 rounded focus:ring-2 focus:ring-amber-500"
              />
            </div>
          )}

          {activeTab === 'microsoft-word' && (
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                Upload Word Document
              </label>
              <input
                type="file"
                accept=".doc,.docx,.txt"
                onChange={handleFileUpload}
                className="w-full px-3 py-2 border border-amber-300 rounded"
              />
            </div>
          )}

          {activeTab === 'wattpad' && (
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                Wattpad Story URL
              </label>
              <input
                type="url"
                value={wattpadUrl}
                onChange={(e) => setWattpadUrl(e.target.value)}
                placeholder="https://www.wattpad.com/story/..."
                className="w-full px-3 py-2 border border-amber-300 rounded focus:ring-2 focus:ring-amber-500"
              />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-amber-300 text-amber-700 rounded hover:bg-amber-50"
          >
            Cancel
          </button>
          <button
            onClick={handleImport}
            disabled={loading || (activeTab === 'google-docs' && !googleDocId) || (activeTab === 'wattpad' && !wattpadUrl)}
            className="flex-1 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 disabled:opacity-50"
          >
            {loading ? 'Importing...' : 'Import'}
          </button>
        </div>
      </div>
    </div>
  );
}