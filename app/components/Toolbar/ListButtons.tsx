import { formatText } from '../../utils/textFormatting';

interface ListButtonsProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
}

export default function ListButtons({ editorRef }: ListButtonsProps) {
  const handleFormat = (command: string) => {
    editorRef.current?.focus();
    formatText(command);
  };

  return (
    <>
      <button
        onClick={() => handleFormat('insertUnorderedList')}
        className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
        title="Bullet List"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 6a2 2 0 100-4 2 2 0 000 4zM6 8h12v2H6V8zm-2 4a2 2 0 100-4 2 2 0 000 4zm2 2h12v2H6v-2zm-2 4a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
      </button>
      <button
        onClick={() => handleFormat('insertOrderedList')}
        className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
        title="Numbered List"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4h1v4H3V6H2V5h1V4zm1 8H3v1h1v1H2v1h2v-4zm-1 6H2v1h2v-1H3v-1h1v-1H2v1h1v1zM6 4h12v2H6V4zm0 6h12v2H6v-2zm0 6h12v2H6v-2z"/>
        </svg>
      </button>
    </>
  );
}