import { Code2, CloudUpload, User, Smile } from 'lucide-react';

import { Flow } from './components';

export default function SolutionFlow() {
  return (
    <section className="flex items-start justify-center gap-2">
      <Flow
        icon={<Code2 className="text-primary size-7" />}
        text="Codifique sua alteração"
      />

      <div className="pt-[40px]">
        <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
      </div>

      <Flow
        icon={<CloudUpload className="text-primary size-7" />}
        text="Atualize seu software"
      />

      <div className="pt-[40px]">
        <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
      </div>

      <Flow
        icon={<User className="text-primary size-7" />}
        text="Nós comunicamos seu usuário"
      />

      <div className="pt-[40px]">
        <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
      </div>

      <Flow
        icon={<Smile className="text-primary size-7" />}
        text="Todos ficam felizes no fim!"
      />
    </section>
  );
}
