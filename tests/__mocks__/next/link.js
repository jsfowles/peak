import * as React from 'react';

module.exports = ({ children, as, href }) =>
  React.cloneElement(children, { href: as || href, originalHref: href });
