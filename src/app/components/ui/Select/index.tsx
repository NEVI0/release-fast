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
  required?: boolean;
}

export default function Select({
  id,
  label,
  placeholder,
  options,
  className,
  required,
}: SelectProps) {
  return (
    <div className={concatClasses('flex flex-col gap-2', className)}>
      {label && (
        <label htmlFor={id} className="flex items-center gap-2">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <BaseSelect required={required}>
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
