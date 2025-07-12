import Link from 'next/link';
import { Instagram, Linkedin, Github, Twitter } from 'lucide-react';

import { VerticalDivider } from '@app/components/ui';
import { DeveloperCard, SocialLink, ScrollToTopButton } from './components';

export default function Footer() {
  return (
    <footer className="relative">
      <div className="flex items-center justify-center w-full border-t border-border bg-container dark:bg-body">
        <div className="flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between h-full w-6xl mx-auto p-8">
          <DeveloperCard />

          <nav className="flex items-center gap-4 h-full">
            <SocialLink
              href="https://www.instagram.com/nevio_costa/"
              icon={Instagram}
            />

            <VerticalDivider />

            <SocialLink
              href="https://www.linkedin.com/in/n%C3%A9vio-magagnin-045710177/"
              icon={Linkedin}
            />

            <VerticalDivider />

            <SocialLink href="https://x.com/nevio_cm" icon={Twitter} />

            <VerticalDivider />

            <SocialLink href="https://github.com/NEVI0" icon={Github} />
          </nav>
        </div>
      </div>

      <ScrollToTopButton />

      <div className="flex items-center justify-center w-full md:h-[52px] py-4 bg-border/25">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full w-6xl px-8 gap-4 mx-auto ">
          <small className="text-text-secondary text-sm">
            &copy; Copyright XCore S.A - {new Date().getFullYear()}
          </small>

          <nav className="flex items-center gap-4 h-full">
            <Link
              href="/privacy"
              className="text-text-secondary text-sm focus:underline hover:underline"
            >
              Privacy Policy
            </Link>

            <VerticalDivider />

            <Link
              href="/terms"
              className="text-text-secondary text-sm focus:underline hover:underline"
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
