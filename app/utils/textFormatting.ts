export const formatText = (command: string, value?: string) => {
  document.execCommand(command, false, value);
};

export const insertText = (text: string, element: HTMLElement) => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
    range.collapse(false);
  }
};

export const getSelectedText = () => {
  return window.getSelection()?.toString() || '';
};

export const wrapSelection = (tag: string, className?: string) => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    
    if (selectedText) {
      const element = document.createElement(tag);
      if (className) element.className = className;
      
      try {
        range.surroundContents(element);
      } catch {
        element.appendChild(range.extractContents());
        range.insertNode(element);
      }
    }
  }
};

export const indentText = (element: HTMLElement, direction: 'indent' | 'outdent') => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    formatText(direction === 'indent' ? 'indent' : 'outdent');
  }
};