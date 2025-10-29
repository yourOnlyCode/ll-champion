interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-2">
      <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded">
        {error}
      </div>
    </div>
  );
}