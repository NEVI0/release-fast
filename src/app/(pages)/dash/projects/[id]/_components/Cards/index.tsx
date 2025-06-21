import { Book, Calendar, Code2 } from 'lucide-react';

import { Card } from '@app/components/common';

export default function Cards() {
  return (
    <section className="flex items-center justify-between gap-4">
      <Card title="Versões criadas" value="33" icon={Code2} />
      <Card title="Última versão" value="v1.2.4" icon={Book} />
      <Card title="Criado em" value="20/06/2025" icon={Calendar} />
    </section>
  );
}
