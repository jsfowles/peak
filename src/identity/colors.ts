export const colors = {
  primaryLight: '#35caef',
  primary: '#00b5e2',
  primaryDark: '#0098be',

  secondaryLight: '#4ac7c1',
  secondary: '#00b2a9',
  secondaryDark: '#03a39c',

  warningLight: '#ff985d',
  warning: '#ff8038',
  warningDark: '#ea6d27',

  errorLight: '#e80e41',
  error: '#d50032',
  errorDark: '#c20431',

  black01: '#1d252d',
  black02: '#333f48',
  black03: '#5b6770',
  black04: '#7c878e',
  black05: '#8d96a0',
  black06: '#bbc5cf',
  black07: '#cdd7e1',
  black08: '#d9e1e9',
  black09: '#f3f7fa',

  white: '#ffffff',
};

export const uiColors = {
  fontColorBase: colors.black01,

  linkColor: colors.primaryDark,
  linkColorHover: colors.primaryLight,
  linkColorFocus: colors.primaryLight,

  mediaLoadingBackground: colors.black09,

  blockquote: colors.black09,
};

export const uiColorsCSS = `
  --font-color-base: ${colors.black01};

  --link-color: ${colors.primaryDark};
  --link-color-hover: ${colors.primaryLight};
  --link-color-focus: ${colors.primaryLight};

  --media-loading-background: ${colors.black09};

  --blockquote: ${colors.black09};
  --border-color: ${colors.black08};
`;
