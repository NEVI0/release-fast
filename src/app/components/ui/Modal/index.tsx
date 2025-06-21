'use client';

import { useEffect, useRef } from 'react';

import { useOnClickOutside } from './hooks';

interface ModalProps {
  children: React.ReactNode;

  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useOnClickOutside({
    ref: modalBoxRef,
    handler: onClose,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog className="fixed top-0 left-0 w-full h-full bg-black/15 backdrop-blur-sm z-50 flex items-center justify-center">
      <div ref={modalBoxRef} className="flex items-center justify-center">
        {children}
      </div>
    </dialog>
  );
}
