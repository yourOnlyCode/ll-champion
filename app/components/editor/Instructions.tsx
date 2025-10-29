export default function Instructions() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-4">
      <div className="bg-amber-100 dark:bg-amber-800 border border-amber-300 dark:border-amber-600 rounded-lg p-4">
        <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">How to share your Google Doc:</h3>
        <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
          <li>1. Open your Google Doc</li>
          <li>2. Click "Share" button (top right)</li>
          <li>3. Change access to "Anyone with the link can view"</li>
          <li>4. Copy the document ID from the URL (between /d/ and /edit)</li>
          <li>5. Paste the ID above and click Load</li>
        </ol>
      </div>
    </div>
  );
}