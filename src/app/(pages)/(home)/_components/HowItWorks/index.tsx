import Link from 'next/link';
import { Code2, Github, Smile, BrainCircuit } from 'lucide-react';

import { Video } from '@app/components/common';
import { Flow } from './components';

export default function HowItWorks() {
  return (
    <>
      <section className="flex flex-col items-center gap-8">
        <h2 className="text-center text-2xl font-bold">
          Click in the video below for a quick preview
        </h2>

        <Video />

        <p className="text-text-secondary text-center w-[90%]">
          Our service allows you to manage your software versions and
          automatically generate releases with{' '}
          <strong className="font-semibold">AI.</strong>. Connect your{' '}
          <strong className="font-semibold">GitHub</strong> repository, select
          two branches versions, and our AI. generates a clear and friendly
          changelog description based on your commit's history. Publish with one
          click and send it to your user or keep it as a documentation
        </p>
      </section>

      <section className="grid grid-cols-2 md:flex md:flex-row md:items-start md:justify-center gap-2">
        <Flow
          icon={<Code2 className="text-primary size-7" />}
          text="Code a change in your software"
          index={1}
        />

        <div className="hidden md:block pt-[40px]">
          <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
        </div>

        <Flow
          icon={<Github className="text-primary size-7" />}
          text="Update your project repository"
          index={2}
        />

        <div className="hidden md:block pt-[40px]">
          <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
        </div>

        <Flow
          icon={<BrainCircuit className="text-primary size-7" />}
          text="Generate a release with AI."
          index={3}
        />

        <div className="hidden md:block pt-[40px]">
          <div className="w-[32px] h-[1px] bg-primary rounded-xl" />
        </div>

        <Flow
          icon={<Smile className="text-primary size-7" />}
          text="Send it to our end user"
          index={4}
        />
      </section>

      <section className="flex items-center justify-center">
        <Link
          href="/#about-section"
          className="font-semibold underline text-primary"
        >
          Liked it? Keep reading to learn more...
        </Link>
      </section>
    </>
  );
}
