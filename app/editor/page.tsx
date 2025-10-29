import EditorClient from '../components/editor';

export default function ElegantEditor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900 dark:to-orange-900">
      <EditorClient />
    </div>
  );
}