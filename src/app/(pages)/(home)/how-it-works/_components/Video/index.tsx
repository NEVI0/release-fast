import { Video as CommonVideo } from '@app/components/common';

export default function Video() {
  return (
    <section className="flex flex-col items-center gap-8">
      <CommonVideo />

      <p className="text-text-secondary text-center w-[90%]">
        Our service allows you to manage your software versions and
        automatically generate releases with{' '}
        <strong className="font-semibold">AI.</strong>. Connect your{' '}
        <strong className="font-semibold">GitHub</strong> repository, select two
        branches versions, and our AI. generates a clear and friendly changelog
        description based on your commit's history. Publish with one click and
        send it to your user or keep it as a documentation
      </p>
    </section>
  );
}
