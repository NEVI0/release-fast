'use client';

import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './base';

interface DropdownOption {
  label: string;
  value: string;
  image?: {
    src: string;
    alt: string;
  };
}

interface DropdownProps {
  value: any;
  options: DropdownOption[];
  setValue: (value: any) => void;

  children: React.ReactNode;
}

export default function Dropdown({
  value,
  setValue,
  options,
  children,
}: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {!!option.image && (
                <Image
                  src={option.image.src}
                  alt={option.image.alt}
                  width={24}
                  height={24}
                />
              )}

              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
