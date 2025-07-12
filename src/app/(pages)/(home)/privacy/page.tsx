import { ChevronRight } from 'lucide-react';

import { formatDate } from '@app/helpers';
import { LINKS } from '@app/constants/links';

import { Breadcrumb } from '@app/components/ui';

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy' },
        ]}
      />

      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">1. Introduction</h3>

          <p>
            This Privacy Policy explains how Release Fast collects, uses, and
            protects your personal information when you use our platform. By
            accessing and using Release Fast, you agree to the practices
            described in this policy.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">2. Information We Collect</h3>

          <p>We collect the following types of information:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Registration information (name, email);
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Usage data (release notes, comments, interactions);
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Technical information (browser type, device information);
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">
            3. How We Use Your Information
          </h3>

          <p>We use your information to:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Provide and maintain our services;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Personalize your experience on the platform;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Communicate with you about updates, features, and important
              notices;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Improve our platform and ensure its security;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">4. Data Sharing</h3>

          <p>
            We do not sell your personal information. We may share your data
            only in the following situations:
          </p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              With your explicit consent;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              To comply with legal obligations;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              With service providers who help us operate and improve Release
              Fast (such as hosting, analytics, or support providers);
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">5. Data Security</h3>

          <p>
            We implement technical and organizational measures to protect your
            personal information against unauthorized access, alteration,
            disclosure, or destruction.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">6. Your Rights</h3>

          <p>You have the right to:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Access your personal information;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Correct inaccurate data;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Request deletion of your data;
            </li>
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Withdraw your consent at any time;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">7. Changes to This Policy</h3>

          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes through the platform or by email.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">8. Contact</h3>

          <p>
            If you have any questions about privacy or this policy, please
            contact us at{' '}
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
