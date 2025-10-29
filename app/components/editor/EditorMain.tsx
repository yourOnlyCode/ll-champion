'use client';

import RichTextEditor from '../RichTextEditor';

interface EditorMainProps {
  content: string;
  onChange: (content: string) => void;
}

export default function EditorMain({ content, onChange }: EditorMainProps) {
  const plainText = content.replace(/<[^>]*>/g, '');
  const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
  const charCount = plainText.length;
  const pageCount = Math.max(1, Math.ceil(wordCount / 250)); // ~250 words per page

  return (
    <main className="max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-8">
      <RichTextEditor
        content={content}
        onChange={onChange}
        placeholder="Begin your story here..."
      />
      
      <div className="mt-4 flex justify-between text-xs sm:text-sm text-amber-600 dark:text-amber-400">
        <div className="flex gap-4">
          <span>Words: {wordCount}</span>
          <span>Characters: {charCount}</span>
          <span>Pages: {pageCount}</span>
        </div>
      </div>
    </main>
  );
}