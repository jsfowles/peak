import styled from 'styled-components';

export interface ContainerProps {
  space?: {
    [key: string]: string;
  };
}

export const Container = styled.section<ContainerProps>(
  props => props.space && props.theme.spacing(props.space),
  props => `
    margin: 0 auto;
    position: relative;
    max-width: ${props.theme.constants.maxWidth}px;
  `,
);

interface RowProps {
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
  wrapRow?: boolean;
  space?: {
    [key: string]: string;
  };
}

export const Row = styled.div<RowProps>(
  props => `
    flex-wrap: ${props.wrapRow ? 'wrap' : 'initial'}
    align-items: ${props.alignItems ? props.alignItems : 'initial'};
    justify-content: ${props.justifyContent ? props.justifyContent : 'initial'};
    flex-direction: ${props.flexDirection ? props.flexDirection : 'column'};
    display: flex;
    padding: 0 7vw;
    max-width: ${props.theme.constants.maxWidth}px;
    ${props.theme.breakpoints.TABLET} {
      flex-direction: ${props.flexDirection ? props.flexDirection : 'initial'};
    }
    ${props.theme.breakpoints.DESKTOP} {
      width: ${100 - props.theme.constants.pageSpacing * 2}vw;
      padding: 0;
    }
  `,
  props => props.space && props.theme.spacing(props.space),
);

export const GridRow = styled(Row)`
  ${props => props.theme.breakpoints.TABLET} {
    display: grid;
    grid-column-gap: 40px;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto 1fr;
  }
`;
