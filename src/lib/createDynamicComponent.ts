import React, { ReactNode } from 'react';

interface Props {
  ['string']?: () => ReactNode;
}

export const createDynamicComponent = (components: Props) => {
  return (props: { __typename: string }) => {
    const contentType = props.__typename;
    const Component = components[contentType];
    if (Component) {
      return <Component {...props} />;
    }
    return null;
  };
};
