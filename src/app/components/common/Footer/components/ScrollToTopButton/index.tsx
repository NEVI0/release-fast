'use client';

import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0 });
  }

  return (
    <button
      className="absolute top-[-26px] right-[64px] w-[52px] h-[52px] rounded-full flex items-center justify-center bg-primary hover:bg-primary-action transition-colors cursor-pointer border-4 border-container shadow-lg"
      onClick={handleScrollToTop}
    >
      <ArrowUp className="text-white" />
    </button>
  );
}
