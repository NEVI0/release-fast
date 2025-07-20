'use client';

import { useEffect, useRef } from 'react';

import { useOnClickOutside } from './hooks';
import { concatClasses } from '@app/helpers';

interface ModalProps {
  children: React.ReactNode;

  isOpen: boolean;
  onClose: () => void;

  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
}: ModalProps) {
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useOnClickOutside({
    ref: modalBoxRef,
    handler: onClose,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog
      className={concatClasses(
        'fixed top-0 left-0 w-full h-full bg-white/15 dark:bg-black/15 backdrop-blur-sm z-50 flex items-center justify-center',
        className
      )}
    >
      <div ref={modalBoxRef} className="flex items-center justify-center">
        {children}
      </div>
    </dialog>
  );
}
