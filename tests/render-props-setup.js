import { render } from '@testing-library/react';

export default (Component?: any, props?: any) => {
  const childrenArg: any = {};
  const children = (arg: any) => {
    Object.assign(childrenArg, arg);
    return null;
  };

  const component = render(<Component {...props}>{children}</Component>);
  return { childrenArg, ...component };
};
