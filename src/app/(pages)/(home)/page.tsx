import { HorizontalDivider } from '@app/components/ui';
import { Hero, HowItWorks, About, Plans, TrianglesShapes } from './_components';

export default function HomePage() {
  return (
    <>
      <TrianglesShapes />
      <Hero />
      <HorizontalDivider id="how-it-works-section" />
      <HowItWorks />
      <HorizontalDivider id="about-section" />
      <About />
      <HorizontalDivider id="plans-section" />
      <Plans />
    </>
  );
}
