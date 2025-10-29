import { formatText } from '../../utils/textFormatting';

interface UnderlineButtonProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
}

export default function UnderlineButton({ editorRef }: UnderlineButtonProps) {
  const handleUnderline = () => {
    editorRef.current?.focus();
    formatText('underline');
  };

  return (
    <button
      onClick={handleUnderline}
      className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
      title="Underline"
    >
      <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18c-4.4 0-8-3.6-8-8V2h2v8c0 3.3 2.7 6 6 6s6-2.7 6-6V2h2v8c0 4.4-3.6 8-8 8zM2 20h16v2H2v-2z"/>
      </svg>
    </button>
  );
}