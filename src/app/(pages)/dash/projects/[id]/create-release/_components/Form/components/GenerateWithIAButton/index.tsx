import { BrainCircuit } from 'lucide-react';

export default function GenerateWithIAButton() {
  return (
    <button
      type="button"
      className="cursor-pointer flex items-center gap-2 text-text-primary hover:text-secondary transition-colors"
    >
      Gerar com I.A <BrainCircuit className="size-4" />
    </button>
  );
}
