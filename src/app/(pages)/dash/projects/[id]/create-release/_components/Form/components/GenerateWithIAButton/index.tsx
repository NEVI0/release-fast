'use client';

import { BrainCircuit } from 'lucide-react';
import { generateByIaAction } from '@app/actions';

export default function GenerateWithIAButton() {
  return (
    <button
      type="button"
      className="cursor-pointer flex items-center gap-2 text-text-primary hover:text-secondary transition-colors"
      onClick={() => generateByIaAction({ prompt: 'Diga oi para mim' })}
    >
      Gerar com I.A <BrainCircuit className="size-4" />
    </button>
  );
}
