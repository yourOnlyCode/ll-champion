import { indentText } from '../../utils/textFormatting';

interface IndentButtonsProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
}

export default function IndentButtons({ editorRef }: IndentButtonsProps) {
  const handleIndent = (direction: 'indent' | 'outdent') => {
    if (editorRef.current) {
      editorRef.current.focus();
      indentText(editorRef.current, direction);
    }
  };

  return (
    <>
      <button
        onClick={() => handleIndent('outdent')}
        className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
        title="Decrease Indent"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4h16v2H2V4zm4 4h12v2H6V8zm-4 4h16v2H2v-2zm4 4h12v2H6v-2zM2 8l4 2-4 2V8z"/>
        </svg>
      </button>
      <button
        onClick={() => handleIndent('indent')}
        className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
        title="Increase Indent"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4h16v2H2V4zm4 4h12v2H6V8zm-4 4h16v2H2v-2zm4 4h12v2H6v-2zM6 8L2 10l4 2V8z"/>
        </svg>
      </button>
    </>
  );
}