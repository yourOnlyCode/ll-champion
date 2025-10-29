import EditorControls from './EditorControls';

interface EditorHeaderProps {
  content: string;
  onContentChange: (content: string) => void;
  onLoadDoc: (docId: string) => void;
  onSave: () => void;
  isLoading: boolean;
  isSaving: boolean;
  onShowInstructions: (show: boolean) => void;
  showInstructions: boolean;
}

export default function EditorHeader(props: EditorHeaderProps) {
  return (
    <header className="bg-white/80 dark:bg-amber-900/80 backdrop-blur-sm border-b border-amber-200 dark:border-amber-700">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-800 dark:text-amber-200">
            Elegant Editor
          </h1>
          <EditorControls {...props} />
        </div>
      </div>
    </header>
  );
}