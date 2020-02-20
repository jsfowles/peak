import { spacing as spacingCalculator, scale } from '../spacing';
import { breakpoints as breakPoints } from '../breakpoints';

describe('spacing', () => {
  it('can interpret single value padding', () => {
    const style = spacingCalculator({ padding: 'top-xs' });
    expect(style).toEqual({
      paddingTop: scale.XS.default,
      [breakPoints.DESKTOP]: { paddingTop: scale.XS.desktop },
      [breakPoints.DESKTOP_HD]: { paddingTop: scale.XS.desktopHD },
    });
  });
  it('can interpret single value margin', () => {
    const style = spacingCalculator({ margin: 'left-sm' });
    expect(style).toEqual({
      marginLeft: scale.SM.default,
      [breakPoints.DESKTOP]: { marginLeft: scale.SM.desktop },
      [breakPoints.DESKTOP_HD]: { marginLeft: scale.SM.desktopHD },
    });
  });
  it('can interpret multiple values for single property', () => {
    const style = spacingCalculator({ margin: 'right-md bottom-xl' });
    expect(style).toEqual({
      marginRight: scale.MD.default,
      marginBottom: scale.XL.default,
      [breakPoints.DESKTOP]: {
        marginRight: scale.MD.desktop,
        marginBottom: scale.XL.desktop,
      },
      [breakPoints.DESKTOP_HD]: {
        marginRight: scale.MD.desktopHD,
        marginBottom: scale.XL.desktopHD,
      },
    });
  });
  it('can interpret multiple properties', () => {
    const style = spacingCalculator({ margin: 'all-sm', padding: 'all-md' });
    expect(style).toEqual({
      padding: scale.MD.default,
      margin: scale.SM.default,
      [breakPoints.DESKTOP]: {
        padding: scale.MD.desktop,
        margin: scale.SM.desktop,
      },
      [breakPoints.DESKTOP_HD]: {
        padding: scale.MD.desktopHD,
        margin: scale.SM.desktopHD,
      },
    });
  });
  it('can interpret multiple values for multiple properties', () => {
    const style = spacingCalculator({
      margin: 'vertical-sm horizontal-md',
      padding: 'vertical-lg horizontal-xl',
    });
    expect(style).toEqual({
      marginTop: scale.SM.default,
      marginBottom: scale.SM.default,
      marginLeft: scale.MD.default,
      marginRight: scale.MD.default,
      paddingTop: scale.LG.default,
      paddingBottom: scale.LG.default,
      paddingLeft: scale.XL.default,
      paddingRight: scale.XL.default,
      [breakPoints.DESKTOP]: {
        marginTop: scale.SM.desktop,
        marginBottom: scale.SM.desktop,
        marginLeft: scale.MD.desktop,
        marginRight: scale.MD.desktop,
        paddingTop: scale.LG.desktop,
        paddingBottom: scale.LG.desktop,
        paddingLeft: scale.XL.desktop,
        paddingRight: scale.XL.desktop,
      },
      [breakPoints.DESKTOP_HD]: {
        marginTop: scale.SM.desktopHD,
        marginBottom: scale.SM.desktopHD,
        marginLeft: scale.MD.desktopHD,
        marginRight: scale.MD.desktopHD,
        paddingTop: scale.LG.desktopHD,
        paddingBottom: scale.LG.desktopHD,
        paddingLeft: scale.XL.desktopHD,
        paddingRight: scale.XL.desktopHD,
      },
    });
  });
  it('can interpret breakpoint specific values', () => {
    const style = spacingCalculator({
      margin: {
        default: 'vertical-xs',
      },
    });
    expect(style).toEqual({
      marginTop: scale.XS.default,
      marginBottom: scale.XS.default,
    });
  });
  it('can interpret breakpoint specific multiple values for single property', () => {
    const style = spacingCalculator({
      margin: {
        default: 'vertical-xs horizontal-md',
      },
    });
    expect(style).toEqual({
      marginTop: scale.XS.default,
      marginBottom: scale.XS.default,
      marginLeft: scale.MD.default,
      marginRight: scale.MD.default,
    });
  });
  it('can interpret multiple breakpoint specific values', () => {
    const style = spacingCalculator({
      margin: {
        default: 'vertical-xs',
        desktop: 'vertical-lg',
      },
    });
    expect(style).toEqual({
      marginTop: scale.XS.default,
      marginBottom: scale.XS.default,
      [breakPoints.DESKTOP]: {
        marginTop: scale.LG.desktop,
        marginBottom: scale.LG.desktop,
      },
    });
  });
  it('can interpret breakpoint specific values for multiple properties', () => {
    const style = spacingCalculator({
      margin: {
        default: 'vertical-xs',
      },
      padding: {
        desktop: 'horizontal-md',
      },
    });
    expect(style).toEqual({
      marginTop: scale.XS.default,
      marginBottom: scale.XS.default,
      [breakPoints.DESKTOP]: {
        paddingLeft: scale.MD.desktop,
        paddingRight: scale.MD.desktop,
      },
    });
  });

  it('can interpret multiple breakpoint specific values for multiple properties', () => {
    const style = spacingCalculator({
      margin: {
        default: 'top-md left-lg',
      },
      padding: {
        desktop: 'bottom-xs right-xl',
      },
    });

    expect(style).toEqual({
      marginTop: scale.MD.default,
      marginLeft: scale.LG.default,
      [breakPoints.DESKTOP]: {
        paddingBottom: scale.XS.desktop,
        paddingRight: scale.XL.desktop,
      },
    });
  });

  it('can interpret breakpoint specific values for multiple breakpoints for multiple properties', () => {
    const style = spacingCalculator({
      margin: {
        default: 'top-md',
        desktop: 'left-lg',
      },
      padding: {
        desktop: 'bottom-xs',
        desktopHD: 'right-xl',
      },
    });

    expect(style).toEqual({
      marginTop: scale.MD.default,
      [breakPoints.DESKTOP]: {
        marginLeft: scale.LG.desktop,
        paddingBottom: scale.XS.desktop,
      },
      [breakPoints.DESKTOP_HD]: {
        paddingRight: scale.XL.desktopHD,
      },
    });
  });

  it('can interpret multiple breakpoint specific values for multiple breakpoints for multiple properties', () => {
    const style = spacingCalculator({
      margin: {
        default: 'top-md right-sm',
        desktop: 'left-lg bottom-xl',
      },
      padding: {
        desktop: 'bottom-xs left-md',
        desktopHD: 'right-xl top-sm',
      },
    });
    expect(style).toEqual({
      marginTop: scale.MD.default,
      marginRight: scale.SM.default,
      [breakPoints.DESKTOP]: {
        marginLeft: scale.LG.desktop,
        marginBottom: scale.XL.desktop,
        paddingBottom: scale.XS.desktop,
        paddingLeft: scale.MD.desktop,
      },
      [breakPoints.DESKTOP_HD]: {
        paddingRight: scale.XL.desktopHD,
        paddingTop: scale.SM.desktopHD,
      },
    });
  });

  it('fails gracefully', () => {
    console.error = jest.fn();
    const style = spacingCalculator({
      margin: 'something-that-does-not-exist',
    });
    expect(style).toEqual({});
    expect(console.error).toBeCalled();
  });
});
