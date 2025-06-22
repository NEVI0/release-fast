'use client';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@app/contexts';
import { Switch } from '@app/components/ui';
import { concatClasses } from '@app/helpers';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <Sun
        className={concatClasses(
          'size-5 text-text-secondary',
          theme === 'light' && 'text-primary'
        )}
      />

      <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />

      <Moon
        className={concatClasses(
          'size-5 text-text-secondary',
          theme === 'dark' && 'text-primary'
        )}
      />
    </div>
  );
}
