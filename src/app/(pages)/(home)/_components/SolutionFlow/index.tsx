import { Code2, CloudUpload, User, Smile } from 'lucide-react';

import { Flow } from './components';

export default function SolutionFlow() {
  return (
    <section className="flex items-start justify-center gap-8">
      <Flow
        icon={<Code2 className="text-primary size-7" />}
        text="Codifique sua alteração"
      />

      <Flow
        icon={<CloudUpload className="text-primary size-7" />}
        text="Atualize seu software"
      />

      <Flow
        icon={<User className="text-primary size-7" />}
        text="Nós comunicamos seu usuário"
      />

      <Flow
        icon={<Smile className="text-primary size-7" />}
        text="Todos ficam felizes no fim!"
      />
    </section>
  );
}
