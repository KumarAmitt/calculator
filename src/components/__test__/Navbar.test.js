import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Quote from '../Quote';

test('should display the company name: Math magicians', () => {
  const { getByTestId } = render(<BrowserRouter><Navbar /></BrowserRouter>);
  const nameElement = getByTestId('name');

  expect(nameElement).toHaveTextContent('Math Magicians');
});

test('should have a link to Home page', () => {
  const { getByTestId } = render(<BrowserRouter><Navbar /></BrowserRouter>);
  const homeLink = getByTestId('home');

  expect(homeLink).toHaveTextContent('Home');
});

test('should have a link to Calculator page', () => {
  const { getByTestId } = render(<BrowserRouter><Navbar /></BrowserRouter>);
  const calcLink = getByTestId('calculator');

  expect(calcLink).toHaveTextContent('Calculator');
});

test('should have a link to Quote page', () => {
  const { getByTestId } = render(<BrowserRouter><Navbar /></BrowserRouter>);
  const quoteLink = getByTestId('quote');

  expect(quoteLink).toHaveTextContent('Quote');
});

test('matches snapshot of Navbar', () => {
  const tree = renderer.create(<Quote />).toJSON();

  expect(tree).toMatchSnapshot();
});
