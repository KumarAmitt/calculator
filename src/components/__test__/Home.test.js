import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Home from '../Home';

test('should have a greeting text', () => {
  const { getByTestId } = render(<Home />);
  const greetElement = getByTestId('greet');

  expect(greetElement.textContent).toBe('Welcome to our page!');
});

test('matches snapshot for Home', () => {
  const tree = renderer.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});
