import { Fragment } from 'react';

import Link from 'next/link';

import { VerticalDivider } from '@app/components/ui';
import { concatClasses } from '@app/helpers';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-4">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        const classes = concatClasses(
          'text-sm hover:underline focus:underline text-nowrap',
          isLast ? 'text-text-primary' : 'text-text-secondary'
        );

        return (
          <Fragment key={item.label}>
            <Link href={item.href} className={classes}>
              {item.label}
            </Link>

            {!isLast && <VerticalDivider />}
          </Fragment>
        );
      })}
    </nav>
  );
}
