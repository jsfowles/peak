export const fontWeightLight = 300;
export const fontWeightNormal = 500;

export type MeasureType = {
  small: string,
  medium: string,
  large: string,
};

export const MEASURE: MeasureType = {
  small: '25rem',
  medium: '32rem',
  large: '85rem',
};

export const lineHeightBase = 1.75;
export const fontWeightBase = fontWeightLight;

export const lineHeightHeadings = 1.32;
export const fontWeightHeadings = fontWeightNormal;

export const typeScale = {
  H1: {
    BASE: 48,
    TABLET: 55,
    DESKTOP: 55,
    LINE_HEIGHT: lineHeightHeadings,
    FONT_WEIGHT: fontWeightHeadings,
  },

  H2: {
    BASE: 39,
    TABLET: 44,
    DESKTOP: 44,
    LINE_HEIGHT: lineHeightHeadings,
    FONT_WEIGHT: fontWeightHeadings,
  },

  H3: {
    BASE: 31,
    TABLET: 36,
    DESKTOP: 36,
    LINE_HEIGHT: lineHeightHeadings,
    FONT_WEIGHT: fontWeightHeadings,
  },

  H4: {
    BASE: 25,
    TABLET: 28,
    DESKTOP: 28,
    LINE_HEIGHT: lineHeightHeadings,
    FONT_WEIGHT: fontWeightHeadings,
  },

  H5: {
    BASE: 20,
    TABLET: 22,
    DESKTOP: 22,
    LINE_HEIGHT: lineHeightHeadings,
    FONT_WEIGHT: fontWeightHeadings,
  },

  H6: {
    BASE: 18,
    TABLET: 20,
    DESKTOP: 20,
    LINE_HEIGHT: lineHeightHeadings,
    FONT_WEIGHT: fontWeightHeadings,
  },

  P: {
    BASE: 16,
    TABLET: 18,
    DESKTOP: 18,
    LINE_HEIGHT: lineHeightBase,
    FONT_WEIGHT: fontWeightBase,
  },

  Li: {
    BASE: 15,
    TABLET: 18,
    DESKTOP: 18,
    LINE_HEIGHT: lineHeightBase,
    FONT_WEIGHT: fontWeightBase,
  },

  Pre: {},

  Small: {
    BASE: 12,
    TABLET: 14,
    DESKTOP: 14,
    LINE_HEIGHT: lineHeightBase,
    FONT_WEIGHT: fontWeightBase,
  },
};
