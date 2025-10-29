'use client';

import FontSelector from './FontSelector';
import TextSizeSelector from './TextSizeSelector';
import BoldButton from './BoldButton';
import ItalicButton from './ItalicButton';
import UnderlineButton from './UnderlineButton';
import ListButtons from './ListButtons';
import AlignmentButtons from './AlignmentButtons';
import IndentButtons from './IndentButtons';

interface ToolbarProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
}

export default function Toolbar({ editorRef }: ToolbarProps) {
  return (
    <div className="overflow-x-auto overflow-y-visible border-b border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-800/50">
      <div className="flex items-center gap-2 p-3 min-w-max">
        {/* Font & Size Selectors */}
        <div className="flex items-center gap-2 border-r border-amber-300 pr-3 mr-3">
          <FontSelector editorRef={editorRef} />
          <TextSizeSelector editorRef={editorRef} />
        </div>

        {/* Text Formatting */}
        <div className="flex items-center gap-2 border-r border-amber-300 pr-3 mr-3">
          <BoldButton editorRef={editorRef} />
          <ItalicButton editorRef={editorRef} />
          <UnderlineButton editorRef={editorRef} />
        </div>

        {/* Lists */}
        <div className="flex items-center gap-2 border-r border-amber-300 pr-3 mr-3">
          <ListButtons editorRef={editorRef} />
        </div>

        {/* Alignment */}
        <div className="flex items-center gap-2 border-r border-amber-300 pr-3 mr-3">
          <AlignmentButtons editorRef={editorRef} />
        </div>

        {/* Indentation */}
        <div className="flex items-center gap-2">
          <IndentButtons editorRef={editorRef} />
        </div>
      </div>
    </div>
  );
}