import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../App';

test('renders the App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('match the snapshot of App', () => {
  const tree = renderer.create(<App />);

  expect(tree).toMatchSnapshot();
});
