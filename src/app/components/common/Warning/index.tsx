import { AlertTriangle } from 'lucide-react';

interface WarningProps {
  message: string;
}

export default function Warning({ message }: WarningProps) {
  return (
    <section className="flex items-center gap-4 px-8 py-6 border border-yellow-600 bg-container rounded-2xl">
      <div>
        <AlertTriangle className="text-yellow-600 size-6" />
      </div>

      <strong className="text-yellow-600 font-semibold">{message}</strong>
    </section>
  );
}
