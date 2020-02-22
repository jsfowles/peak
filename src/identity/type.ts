import styled from 'styled-components';

import { typeScale } from './typeScale';
import { SpacingSetting } from './spacing';
import { remCalc } from '../lib/helperMethods';
import { colors } from './';

interface Scale {
  [el: string]: {
    [property: string]: number;
  };
}

export interface ObjectMap<T> {
  [key: string]: T;
}

export type Update<T> = T | ((current: T) => T);

interface Props {
  fontColor: keyof typeof colors;
  fontWeight: number;
  lineHeight: number;
  space: SpacingSetting;
  disableMeasure: boolean;
  textAlign: 'left' | 'center' | 'right';
  uppercase: 'uppercase';
}

type Element = keyof JSX.IntrinsicElements;

const typeMapper = (scale: Scale) =>
  Object.keys(scale).reduce(
    (typeObject, el) => ({
      ...typeObject,
      [el]: styled(el.toLowerCase() as Element)<Props>(
        ({ theme, space }) => space && theme.spacing(space),
        ({
          theme,
          fontColor,
          fontWeight,
          lineHeight,
          textAlign,
          uppercase,
        }) => `
          color:  ${theme.colors[fontColor] || theme.uiColors.fontColorBase};
          font-size: ${scale[el].BASE && remCalc(scale[el].BASE)};
          font-weight: ${fontWeight || scale[el].FONT_WEIGHT};
          line-height: ${lineHeight || scale[el].LINE_HEIGHT};
          text-align: ${textAlign ? textAlign : ''};
          width: 100%;
          text-transform: ${uppercase ? 'uppercase' : 'none'}

          ${theme.breakpoints.TABLET} {
            font-size: ${scale[el].TABLET && remCalc(scale[el].TABLET)};
          }

          ${theme.breakpoints.DESKTOP} {
            font-size: ${scale[el].DESKTOP && remCalc(scale[el].DESKTOP)};
          }
        `,
      ),
    }),
    {},
  );

export const TypeScale: any = typeMapper(typeScale);
