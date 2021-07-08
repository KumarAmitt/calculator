import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Display from '../Display';

test('displays the result', () => {
  const result = '7+31';
  const { getByTestId } = render(<Display result={result} />);
  const resultElement = getByTestId('result');

  expect(resultElement.textContent).toBe(result);
});

test('match snapshot of Display', () => {
  const tree = renderer.create(<Display />).toJSON();

  expect(tree).toMatchSnapshot();
});
