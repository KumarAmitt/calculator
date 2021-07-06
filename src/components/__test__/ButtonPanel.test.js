import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import ButtonPanel from '../ButtonPanel';

test('match snapshot of ButtonPanel', () => {
  const tree = renderer.create(<ButtonPanel clickHandler={fireEvent.click} />).toJSON();

  expect(tree).toMatchSnapshot();
});
