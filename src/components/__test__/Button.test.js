import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Button from '../Button';

test('renders a button correctly', () => {
  const { getByTestId } = render(<Button clickHandler={fireEvent.click} color="orange" wide={false} buttonName="+" />);
  const button = getByTestId('button');

  expect(button.textContent).toBe('+');
});

test('match snapshot of Button', () => {
  const tree = renderer.create(<Button clickHandler={fireEvent.click} color="orange" wide={false} buttonName="+" />).toJSON();

  expect(tree).toMatchSnapshot();
});
