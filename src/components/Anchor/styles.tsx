import styled from 'styled-components';

export const A = styled.a(
  ({ theme }) => `
    color: ${theme.uiColors.linkColor};
    text-decoration: none;
    transition: color ${theme.constants.animationDurationLong}ms ${theme.constants.animationTiming};

    &:hover {
      color: ${theme.uiColors.linkColorHover};
    }

    &:focus {
      color: ${theme.uiColors.linkColorFocus};
    }
  `,
);
