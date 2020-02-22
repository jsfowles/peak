import { remCalc } from '../lib/helperMethods';
import * as c from './constants';
import { mergeObjectify, objectify } from '../lib/arrays';
import { ObjectMap } from './type';
import { breakpoints } from './breakpoints';

export const splitValue = (value: string): Array<Array<string>> =>
  value.split(' ').map(s => s.split('-'));

export const getPostFixes = (type: string): Array<string> | void => {
  switch (type) {
    // if target spacing is horizontal, we'll set the left and right spacing
    case 'horizontal':
      return ['Left', 'Right'];
    // if target spacing is vertical we'll set the top and bottom
    case 'vertical':
      return ['Top', 'Bottom'];
    // if target spacing is all then no prefix is needed
    case 'all':
      return [''];
    // if target spacing is meant to unset existing styles
    case 'none':
      return;
    // otherwise the specific prefix must be provided, so we just format it correctly
    default:
      return [`${type.charAt(0).toUpperCase()}${type.slice(1)}`];
  }
};

export type SpacingSettingKey = 'margin' | 'padding';

// prettier-ignore
export type SpacingSetting = Partial<Record<SpacingSettingKey, string | { [key: string]: string }>>;

export type Style = {
  [key: string]: string | number;
};

export type StyleValue = Style | string | number;

export type StyleBlock = {
  [key: string]: StyleValue;
};

export type Scale = {
  [key: string]: {
    [key: string]: string | number;
  };
};

export const spacerFactory = (scale: Scale, breakPoints: ObjectMap<string>) => (
  options: SpacingSetting,
): StyleBlock => {
  const getStyle = (
    property: string,
    size: string,
    postFixes: Array<string> | void,
    breakPoint: string = 'default',
  ): Style | void => {
    // if 'none' setting was used then property value should be 0.
    if (!postFixes || size === 'none') {
      return {
        [property]: 0,
      };
    }

    const sizeIndex = size.toUpperCase();
    if (!(sizeIndex in scale) || !(breakPoint in scale[sizeIndex])) {
      console.error('Spacing: Invalid setting provided', {
        size,
        breakPoint,
        property,
      });
      return;
    }

    return objectify<string, string | number>(postFixes, (postFix: string) => {
      const key = `${property}${postFix}`;
      return {
        // postfix could be '', which would just set the base property
        [key]: scale[size.toUpperCase()][breakPoint] || 1,
      };
    });
  };
  const getStyles = (
    property: string,
    size: string,
    type: string = 'all',
    breakpoint?: string,
  ): StyleBlock | void => {
    // get applicable style post fixes
    const postFixes: Array<string> | void = getPostFixes(type);

    // breakpoint is set when an individual style is needed rather than the
    // the styles for all breakpoints
    if (breakpoint) {
      // if breakpoint is default then we don't want to wrap it in the
      // breakpoint media query
      if (breakpoint === 'default') {
        return getStyle(property, size, postFixes);
      }
      const style = getStyle(property, size, postFixes, breakpoint);
      if (!style) {
        return {};
      }
      return {
        [breakPoints[breakpoint]]: style,
      };
    }
    return {
      ...getStyle(property, size, postFixes),
      ...objectify<[string, any], StyleValue>(
        Object.entries(breakPoints),
        ([breakPointName, breakPointValue]: [string, any]) => {
          const style = getStyle(property, size, postFixes, breakPointName);
          if (!style) {
            return {};
          }
          return {
            [breakPointValue]: style,
          };
        },
      ),
    };
  };

  return mergeObjectify<[string, any], StyleValue>(
    Object.entries(options),
    ([property, settingsString]: [string, any]) => {
      // Check if individual breakpoint settings were passed in, e.g.:
      // { margin: { default: 'all-sm', desktop: 'horizontal-md vertical-sm' } }
      if (typeof settingsString !== 'string') {
        return objectify<[string, any], StyleValue>(
          Object.entries(settingsString),
          ([breakpoint, breakpointSettingsString]) => {
            // get the breakpoint settings in the needed format [ [ type, size ] ]
            const breakpointSettings = splitValue(breakpointSettingsString);
            // because there may be separate properties within the same breakpoint
            // the results must be merged instead of just spread.
            return mergeObjectify<Array<string>, StyleValue>(
              breakpointSettings,
              ([type, size]) => getStyles(property, size, type, breakpoint),
            );
          },
        );
      }

      // get the settings in the needed format [ [ type, size ] ]
      const settings = splitValue(settingsString);
      return mergeObjectify<Array<string>, StyleValue>(
        settings,
        ([type, size]) => getStyles(property, size, type),
      );
    },
  );
};

export const scale = {
  XXS: {
    default: remCalc(c.XX_SMALL_MOBILE),
    desktop: remCalc(c.XX_SMALL_DESKTOP),
    desktopHD: remCalc(c.XX_SMALL_DESKTOP_HD),
  },
  XS: {
    default: remCalc(c.X_SMALL_MOBILE),
    desktop: remCalc(c.X_SMALL_DESKTOP),
    desktopHD: remCalc(c.X_SMALL_DESKTOP_HD),
  },
  SM: {
    default: remCalc(c.SMALL_MOBILE),
    desktop: remCalc(c.SMALL_DESKTOP),
    desktopHD: remCalc(c.SMALL_DESKTOP_HD),
  },
  MD: {
    default: remCalc(c.MEDIUM_MOBILE),
    desktop: remCalc(c.MEDIUM_DESKTOP),
    desktopHD: remCalc(c.MEDIUM_DESKTOP_HD),
  },
  LG: {
    default: remCalc(c.LARGE_MOBILE),
    desktop: remCalc(c.LARGE_DESKTOP),
    desktopHD: remCalc(c.LARGE_DESKTOP_HD),
  },
  XL: {
    default: remCalc(c.X_LARGE_MOBILE),
    desktop: remCalc(c.X_LARGE_DESKTOP),
    desktopHD: remCalc(c.X_LARGE_DESKTOP_HD),
  },
};

export const breakPoints = {
  desktop: breakpoints.DESKTOP,
  desktopHD: breakpoints.DESKTOP_HD,
};
export const spacing = spacerFactory(scale, breakPoints);

export default spacing;
