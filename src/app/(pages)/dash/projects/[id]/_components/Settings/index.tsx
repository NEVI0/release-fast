import { Edit3, Trash2 } from 'lucide-react';

import { Setting } from '@app/components/common';
import { Button, Switch } from '@app/components/ui';

export default function Settings() {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="font-bold text-2xl">Configurações</h3>

      <ul className="flex flex-col gap-4">
        <li>
          <Setting
            title="Visibilidade"
            description="Defina a visibilidade do projeto"
          >
            <div className="flex items-center gap-2">
              <Switch />
              <span>Público</span>
            </div>
          </Setting>
        </li>

        <li>
          <Setting
            title="Editar dados do projeto"
            description="Edite os dados do projeto"
          >
            <Button>
              Editar projeto <Edit3 className="size-5" />
            </Button>
          </Setting>
        </li>

        <li>
          <Setting
            title="Excluir projeto"
            description="Exclua o projeto e todos os seus dados (esta ação é irreversível)"
          >
            <Button variant="danger">
              Excluir projeto <Trash2 className="size-5" />
            </Button>
          </Setting>
        </li>
      </ul>
    </section>
  );
}
