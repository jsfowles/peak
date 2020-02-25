import { css } from 'styled-components';

export const constants = css`
  --animation-timing: cubic-bezier(0.23, 1, 0.32, 1);
  --animation-duration-xl: 750;
  --animation-duration-l: 500;
  --animation-duration-m: 250;
  --animation-duration-s: 100;
  --max-width: 1024px;
  --box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
`;

/*
 * Spacing:
 */
export const X_LARGE_MOBILE = 32;
export const X_LARGE_DESKTOP = 48;
export const X_LARGE_DESKTOP_HD = 48;

export const LARGE_MOBILE = 24;
export const LARGE_DESKTOP = 32;
export const LARGE_DESKTOP_HD = 32;

export const MEDIUM_MOBILE = 16;
export const MEDIUM_DESKTOP = 24;
export const MEDIUM_DESKTOP_HD = 24;

export const SMALL_MOBILE = 12;
export const SMALL_DESKTOP = 16;
export const SMALL_DESKTOP_HD = 16;

export const X_SMALL_MOBILE = 8;
export const X_SMALL_DESKTOP = 8;
export const X_SMALL_DESKTOP_HD = 8;

export const XX_SMALL_MOBILE = 4;
export const XX_SMALL_DESKTOP = 4;
export const XX_SMALL_DESKTOP_HD = 4;

export const DESKTOP = '@media (min-width: 1200px)';
export const DESKTOP_HD = '@media (min-width: 1440px)';

export const FONT_WEIGHT = {
  LIGHT: 400,
  NORMAL: 500,
  BOLD: 600,
};
