import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

test('look for a quote element', () => {
  const { getByTestId } = render(<Quote />);
  const quoteElement = getByTestId('quote');

  expect(quoteElement).toBeInTheDocument();
});

test('matches snapshot of Quote', () => {
  const tree = renderer.create(<Quote />).toJSON();

  expect(tree).toMatchSnapshot();
});
