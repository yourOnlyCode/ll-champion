'use client';

import RichTextEditor from '../RichTextEditor';

interface EditorMainProps {
  content: string;
  onChange: (content: string) => void;
}

export default function EditorMain({ content, onChange }: EditorMainProps) {
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(word => word.length > 0).length;
  const charCount = content.replace(/<[^>]*>/g, '').length;

  return (
    <main className="max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-8">
      <RichTextEditor
        content={content}
        onChange={onChange}
        placeholder="Begin your story here..."
      />
      
      <div className="mt-4 flex justify-between text-xs sm:text-sm text-amber-600 dark:text-amber-400">
        <span>Words: {wordCount}</span>
        <span>Characters: {charCount}</span>
      </div>
    </main>
  );
}