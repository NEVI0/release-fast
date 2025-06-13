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
      <HorizontalDivider id="media-section" />
      <Media />
      <HorizontalDivider id="research-section" />
      <Research />
      <HorizontalDivider />
      <Form />
      <HorizontalDivider />
      <Mention />
    </>
  );
}
