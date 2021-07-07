import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

test('should display the tagline', () => {
  const { getByTestId } = render(<Calculator />);
  const taglineElement = getByTestId('tagline');

  expect(taglineElement).toHaveTextContent('Let\'s do some math');
});

test('match snapshot of Calculator component', () => {
  const tree = renderer.create(<Calculator />).toJSON();

  expect(tree).toMatchSnapshot();
});
