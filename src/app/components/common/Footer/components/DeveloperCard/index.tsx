import Image from 'next/image';

export default function DeveloperCard() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-4">
      <Image
        src="/images/nevio.png"
        alt="Névio Costa Magagnin"
        width={52}
        height={52}
        className="rounded-full"
      />

      <div className="flex flex-col">
        <p className="text-center md:text-left">
          Criado por Névio Costa Magagnin
        </p>

        <small className="text-center text-sm md:text-left text-text-secondary">
          Engenheiro de Software & UI/UX Designer
        </small>
      </div>
    </div>
  );
}
