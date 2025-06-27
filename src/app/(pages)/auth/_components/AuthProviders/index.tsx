import Image from 'next/image';

import { Button } from '@app/components/ui';
import { accessAccountAction } from '@app/actions';

interface AuthProvidersProps {
  google?: string;
  github?: string;
  gitlab?: string;
}

export default function AuthProviders({
  google = 'Entrar com Google',
  github = 'Entrar com Github',
  gitlab = 'Entrar com Gitlab',
}: AuthProvidersProps) {
  return (
    <footer className="flex flex-col gap-4">
      <Button
        variant="default"
        type="button"
        onClick={() => accessAccountAction('google')}
      >
        <Image
          src="/icons/google.png"
          alt="Google Icon"
          width={24}
          height={24}
        />
        {google}
      </Button>

      <Button
        variant="default"
        type="button"
        onClick={() => accessAccountAction('github')}
      >
        <Image
          src="/icons/github.png"
          alt="Github Icon"
          width={24}
          height={24}
        />
        {github}
      </Button>

      <Button
        variant="default"
        type="button"
        onClick={() => accessAccountAction('gitlab')}
      >
        <Image
          src="/icons/gitlab.png"
          alt="Gitlab Icon"
          width={24}
          height={24}
        />
        {gitlab}
      </Button>
    </footer>
  );
}
