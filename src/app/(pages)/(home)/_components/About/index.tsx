import { Info } from './components';

export default function Research() {
  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-center text-2xl font-bold">
        But... why this solution? 🧐
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        <Info variant="secondary" value="25%">
          <p className="w-full text-center text-text-secondary">
            Of software developers spend their time writing documentation of
            their code or released software versions.
          </p>
        </Info>

        <Info value="90%">
          <p className="w-full text-center text-text-secondary">
            Of developers feel frustrated having to write documentation of
            changes that were added to softwares.
          </p>
        </Info>

        <Info variant="secondary" value="72%">
          <p className="w-full text-center text-text-secondary">
            Of system users feel frustrated when they are not aware of changes
            in the system.
          </p>
        </Info>
      </div>

      <p className="text-center w-full md:w-[50%]">
        But <strong className="font-semibold">Release Fast</strong> came to make
        developer's lives easier when it comes to this requirement!
      </p>
    </section>
  );
}
