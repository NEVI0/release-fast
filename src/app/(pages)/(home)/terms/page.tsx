import { ChevronRight } from 'lucide-react';

import { formatDate } from '@app/helpers';
import { LINKS } from '@app/constants/links';

import { Breadcrumb } from '@app/components/ui';

export default function TermsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Terms and Conditions of Use', href: '/terms' },
        ]}
      />

      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Terms and Conditions of Use</h1>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>

          <p>
            By accessing and using Release Fast, you agree to comply with and be
            bound by these Terms and Conditions of Use. If you do not agree with
            any part of these terms, you should not use our platform.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">2. Use of the Service</h3>

          <p>
            Release Fast is a platform designed to help teams manage, document,
            and share software releases efficiently. By using our services, you
            agree to:
          </p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Provide accurate and truthful information during registration;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Keep your login credentials secure and confidential;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Not share your account with third parties;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Respect other users and their contributions;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Not publish illegal, offensive, or inappropriate content;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">3. User Content</h3>

          <p>By publishing content on Release Fast, you:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Retain copyright over your content;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Grant Release Fast a non-exclusive license to use, modify, and
              distribute your content for the purpose of providing and improving
              the service;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Are responsible for all content you publish;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Ensure you have all necessary rights to share the content;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">4. User Conduct</h3>

          <p>It is prohibited to:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Publish illegal, defamatory, obscene, or offensive content;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Use the platform for spam or unauthorized advertising;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Violate third-party intellectual property rights;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Engage in activities that may damage or overload our systems;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Collect data from other users without authorization;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">5. Privacy and Data</h3>

          <p>
            Our Privacy Policy describes how we collect, use, and protect your
            personal information. By using our platform, you agree to our
            privacy practices as described in our Privacy Policy.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">6. Changes to the Terms</h3>

          <p>
            We reserve the right to modify these terms at any time. Changes will
            take effect immediately upon publication. Continued use of the
            platform after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">7. Limitation of Liability</h3>

          <p>Release Fast is not responsible for:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Content generated by users;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Damages caused by improper use of the platform;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Temporary service interruptions;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Loss of data or content;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">8. Account Termination</h3>

          <p>
            We reserve the right to suspend or terminate accounts that violate
            these terms or engage in inappropriate conduct. You may also
            terminate your account at any time through the platform settings.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">9. Contact</h3>

          <p>
            For questions regarding these terms, please contact us at{' '}
            <a href={`mailto:${LINKS.SUPPORT_EMAIL}`} className="text-primary">
              {LINKS.SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>

      <small className="text-sm text-text-secondary">
        Last updated: {formatDate(new Date('07-12-2025'), 'MMMM DD, YYYY')}
      </small>
    </>
  );
}
