import { HorizontalDivider } from '@app/components/ui';
import {
  Form,
  Hero,
  Media,
  Mention,
  Research,
  SolutionFlow,
} from './_components';

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionFlow />
      <HorizontalDivider />
      <Media />
      <HorizontalDivider />
      <Research />
      <HorizontalDivider />
      <Form />
      <HorizontalDivider />
      <Mention />
    </>
  );
}
