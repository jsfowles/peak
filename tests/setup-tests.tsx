import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import * as theme from '../src/identity';

const withTheme = (children, value = theme) => (
  <ThemeProvider theme={value}>{children}</ThemeProvider>
);

global.withTheme = withTheme;

console.error = jest.fn();

// this is just a little hack to silence a warning that we'll get until react
// fixes this: https://github.com/facebook/react/pull/14853
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});
