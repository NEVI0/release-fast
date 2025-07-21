import Image from 'next/image';

export default function DeveloperCard() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-4">
      <Image
        src="/images/nevio.png"
        alt="Névio Costa Magagnin"
        width={64}
        height={64}
        className="rounded-full"
      />

      <div className="flex flex-col">
        <p className="text-center md:text-left">
          Created by Névio Costa Magagnin
        </p>

        <small className="text-center text-sm md:text-left text-text-secondary">
          Software Engineer & UI/UX Designer
        </small>
      </div>
    </div>
  );
}
