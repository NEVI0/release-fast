'use client';

import Image from 'next/image';
import Link from 'next/link';

import { LOGO_DIMENSIONS } from '@app/constants/logo-dimensions';
import { useTheme } from '@app/contexts';

interface ThemeLogoProps {
  width?: number;
  height?: number;
  alt?: string;
  href?: string;
  className?: string;
  classNameImage?: string;
}

export default function ThemeLogo({
  width = LOGO_DIMENSIONS['normal'].width,
  height = LOGO_DIMENSIONS['normal'].height,
  alt = 'Release Fast Logo',
  href,
  className = '',
  classNameImage = '',
}: ThemeLogoProps) {
  const { theme } = useTheme();

  const src =
    theme === 'dark' ? '/images/logo-light.png' : '/images/logo-dark.png';

  const logo = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNameImage}
    />
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {logo}
      </Link>
    );
  }

  return logo;
}
