export type ImportSource = 'google-docs' | 'microsoft-word' | 'wattpad' | 'file-upload';

export interface ImportResult {
  content: string;
  title?: string;
  metadata?: {
    wordCount: number;
    author?: string;
    source: ImportSource;
    originalUrl?: string;
  };
}

export class ImportService {
  // Import from Google Docs (existing functionality)
  static async importFromGoogleDocs(docId: string): Promise<ImportResult> {
    const response = await fetch(`/api/import/google-docs?docId=${docId}`);
    if (!response.ok) {
      throw new Error('Failed to import from Google Docs');
    }
    return await response.json();
  }

  // Import from Microsoft Word file
  static async importFromWord(file: File): Promise<ImportResult> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/import/microsoft-word', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Failed to import Word document');
    }
    return await response.json();
  }

  // Import from Wattpad story
  static async importFromWattpad(storyUrl: string): Promise<ImportResult> {
    const response = await fetch('/api/import/wattpad', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: storyUrl })
    });
    
    if (!response.ok) {
      throw new Error('Failed to import from Wattpad');
    }
    return await response.json();
  }

  // Import from plain text file
  static async importFromFile(file: File): Promise<ImportResult> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        resolve({
          content,
          title: file.name.replace(/\.[^/.]+$/, ''),
          metadata: {
            wordCount: content.split(/\s+/).length,
            source: 'file-upload'
          }
        });
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  }
}