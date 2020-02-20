import * as React from 'react';
import Link from 'next/link';

import { determineExternalLink } from '@lib/helperMethods';

import { A } from './styles';

interface Props {
  children?: string | React.ReactNode;
  href?: string;
  noBlank?: boolean;
}

const Anchor = ({ href, children, noBlank }: Props) => {
  const isExternal = determineExternalLink(href);
  const linkProps = {
    ...(noBlank || !isExternal ? {} : { target: '_blank' }),
  };

  if (href) {
    return isExternal ? (
      <A href={href} {...linkProps}>
        {children}
      </A>
    ) : (
      <Link href={href} passHref>
        <A {...linkProps}>{children}</A>
      </Link>
    );
  }

  return null;
};

Anchor.defaultProps = {
  noBlank: false,
};

export default Anchor;
