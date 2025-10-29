import { formatText } from '../../utils/textFormatting';

interface AlignmentButtonsProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
}

export default function AlignmentButtons({ editorRef }: AlignmentButtonsProps) {
  const handleFormat = (command: string) => {
    editorRef.current?.focus();
    formatText(command);
  };

  return (
    <>
      <button
        onClick={() => handleFormat('justifyLeft')}
        className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
        title="Align Left"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4h16v2H2V4zm0 4h10v2H2V8zm0 4h16v2H2v-2zm0 4h10v2H2v-2z"/>
        </svg>
      </button>
      <button
        onClick={() => handleFormat('justifyCenter')}
        className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
        title="Center"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4h16v2H2V4zm3 4h10v2H5V8zm-3 4h16v2H2v-2zm3 4h10v2H5v-2z"/>
        </svg>
      </button>
      <button
        onClick={() => handleFormat('justifyRight')}
        className="p-3 sm:p-2 hover:bg-amber-200 dark:hover:bg-amber-700 rounded min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center"
        title="Align Right"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4h16v2H2V4zm6 4h10v2H8V8zm-6 4h16v2H2v-2zm6 4h10v2H8v-2z"/>
        </svg>
      </button>
    </>
  );
}