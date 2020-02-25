import { css } from 'styled-components';

export const colors = css`
  --primary-light: #35caef;
  --primary: #00b5e2;
  --primary-dark: #0098be;

  --secondary-light: #4ac7c1;
  --secondary-: #00b2a9;
  --secondary-dark: #03a39c;

  --warning-light: #ff985d;
  --warning-: #ff8038;
  --warning-dark: #ea6d27;

  --error-light: #e80e41;
  --error-: #d50032;
  --error-dark: #c20431;

  --black01: #1d252d;
  --black02: #333f48;
  --black03: #5b6770;
  --black04: #7c878e;
  --black05: #8d96a0;
  --black06: #bbc5cf;
  --black07: #cdd7e1;
  --black08: #d9e1e9;
  --black09: #f3f7fa;

  --white: #ffffff;
`;

export const uiColors = css`
  --font-color-base: var(--black01);

  --link-color: var(--primary-dark);
  --link-color-hover: var(--primary-light);
  --link-color-focus: var(--primary-light);

  --media-loading-background: var(--black09);

  --blockquote: var(--black09);
  --border-color: var(--black08);
`;
