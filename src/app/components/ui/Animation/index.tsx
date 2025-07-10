'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AnimationProps {
  loop?: boolean;
  width: number;
  height: number;
  animation: any;
}

export default function Animation({
  loop = true,
  width,
  height,
  animation,
}: AnimationProps) {
  return (
    <Lottie animationData={animation} loop={loop} style={{ width, height }} />
  );
}
