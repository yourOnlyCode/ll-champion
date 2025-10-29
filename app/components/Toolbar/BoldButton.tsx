import { formatText } from '../../utils/textFormatting';

interface BoldButtonProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
}

export default function BoldButton({ editorRef }: BoldButtonProps) {
  const handleBold = () => {
    editorRef.current?.focus();
    formatText('bold');
  };

  return (
    <button
      onClick={handleBold}
      className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
      title="Bold"
    >
      <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3v14h5.5c2.5 0 4.5-2 4.5-4.5 0-1.5-.8-2.8-2-3.5 1.2-.7 2-2 2-3.5C15 3 13 1 10.5 1H5v2zm2 2h3.5c1.4 0 2.5 1.1 2.5 2.5S11.9 10 10.5 10H7V5zm0 7h4c1.7 0 3 1.3 3 3s-1.3 3-3 3H7v-6z"/>
      </svg>
    </button>
  );
}