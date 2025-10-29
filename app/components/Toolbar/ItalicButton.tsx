import { formatText } from '../../utils/textFormatting';

interface ItalicButtonProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
}

export default function ItalicButton({ editorRef }: ItalicButtonProps) {
  const handleItalic = () => {
    editorRef.current?.focus();
    formatText('italic');
  };

  return (
    <button
      onClick={handleItalic}
      className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
      title="Italic"
    >
      <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 1h8v2h-2.5L9.5 17H12v2H4v-2h2.5L10.5 3H8V1z"/>
      </svg>
    </button>
  );
}