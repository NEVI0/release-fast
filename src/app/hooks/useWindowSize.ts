import { useState, useEffect } from 'react';

import { getWindowDimensions } from '@app/helpers';

type Size = { width: number; height: number };
type Breakpoint = 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const getBreakPoint = (width: number) => {
  let breakpoint: Breakpoint = 'sm';

  if (width < 576) breakpoint = 'xsm';
  if (width >= 640) breakpoint = 'sm';
  if (width >= 768) breakpoint = 'md';
  if (width >= 1024) breakpoint = 'lg';
  if (width >= 1280) breakpoint = 'xl';
  if (width >= 1536) breakpoint = 'xxl';

  return breakpoint;
};

export default function useWindowSize() {
  const [size, setSize] = useState<Size>(getWindowDimensions());
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(
    getBreakPoint(size.width)
  );

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = getWindowDimensions();

      setSize({ width, height });
      setBreakpoint(getBreakPoint(width));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { size, breakpoint };
}
