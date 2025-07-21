import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import { Info } from './components';

export default function Research() {
  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-center text-2xl font-bold">
        But... why this solution? 🧐
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        <Info variant="secondary" value="53%">
          <p className="w-full text-center">
            Of system users reported that quality communication regarding
            software changes is very important.
          </p>
        </Info>

        <Info value="72%">
          <p className="w-full text-center">
            Of system users feel frustrated when they are not aware of changes
            in the system.
          </p>
        </Info>

        <Info variant="secondary" value="64%">
          <p className="w-full text-center">
            Of system users reported that their productivity has already been
            affected by changes that were not properly communicated.
          </p>
        </Info>
      </div>
    </section>
  );
}
