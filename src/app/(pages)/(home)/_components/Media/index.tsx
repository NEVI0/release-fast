import Link from 'next/link';

import { PlayCircle } from 'lucide-react';

export default function Media() {
  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-2xl font-bold">
        Vamos lá! Click no vídeo abaixo para ter uma pequena amostra...
      </h2>

      <div className="w-[832px] h-[432px] bg-text-primary rounded-3xl flex items-center justify-center">
        <PlayCircle className="text-white size-8" />
      </div>

      <p className="text-text-secondary text-center w-[90%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        suscipit quam vel erat dapibus finibus. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Nam pretium nec
        justo eu fermentum. Ut porttitor lectus nibh, consectetur dictum justo
        interdum ut. Vestibulum purus felis, pretium id urna vel, varius dapibus
        nulla.
      </p>

      <Link href="/" className="font-semibold underline text-primary">
        Gostou? Continue lendo um pouco mais...
      </Link>
    </section>
  );
}
