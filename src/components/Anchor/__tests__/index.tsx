import { render, cleanup } from '@testing-library/react';

import Anchor from '../index';

describe('Anchor', () => {
  afterEach(cleanup);

  test('renders null when no href is passed in', () => {
    const { container } = render(withTheme(<Anchor />));
    expect(container.firstChild).toBeNull();
  });

  test('renders a link tag when there is a URL', () => {
    const { container } = render(withTheme(<Anchor href="/test">test</Anchor>));
    expect(container.firstChild).toHaveAttribute('href', '/test');
  });

  test('renders a target="_blank" when the link is external', () => {
    const { container } = render(
      withTheme(<Anchor href="www.google.com">test</Anchor>),
    );
    expect(container.firstChild).toHaveAttribute('target', '_blank');
  });

  test('sometimes we want to override the _blank with noBlank prop', () => {
    const { container } = render(
      withTheme(
        <Anchor href="www.google.com" noBlank>
          test
        </Anchor>,
      ),
    );
    expect(container.firstChild).not.toHaveAttribute('target', '_blank');
  });
});
