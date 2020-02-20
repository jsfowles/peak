import { round } from 'lodash';

const EXTERNAL_REGEX = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

export const targetForUrl = (href?: string): string => {
  if (href) {
    const matches = href.match(EXTERNAL_REGEX);

    if (typeof window !== 'undefined') {
      return matches &&
        matches.length &&
        !href.includes(window.location.hostname)
        ? '_blank'
        : '';
    }
  }

  return '';
};

export const determineExternalLink = (href?: string): boolean | undefined => {
  if (href) {
    const matches = href.match(EXTERNAL_REGEX);
    if (typeof window !== 'undefined') {
      return matches &&
        matches.length &&
        !href.includes(window.location.hostname)
        ? true
        : false;
    }
  }
};

export const remCalc = (pixelValue: number, baseValue: number = 16) =>
  `${round(pixelValue / baseValue, 2)}rem`;
