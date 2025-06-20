import { concatClasses } from '@app/helpers';

import {
  BaseSelect,
  BaseSelectContent,
  BaseSelectItem,
  BaseSelectTrigger,
  BaseSelectValue,
} from './base';

interface Option {
  label: string;
  value: any;
  className?: string;
}

interface SelectProps {
  id: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  className?: string;
}

export default function Select({
  id,
  label,
  placeholder,
  options,
  className,
}: SelectProps) {
  return (
    <div className={concatClasses('flex flex-col gap-2', className)}>
      {label && <label htmlFor={id}>{label}</label>}

      <BaseSelect>
        <BaseSelectTrigger className="flex items-center justify-between">
          <BaseSelectValue placeholder={placeholder || 'Selecionar'} />
        </BaseSelectTrigger>

        <BaseSelectContent>
          {options.map((option) => (
            <BaseSelectItem key={option.value} value={option.value}>
              {option.label}
            </BaseSelectItem>
          ))}
        </BaseSelectContent>
      </BaseSelect>
    </div>
  );
}
