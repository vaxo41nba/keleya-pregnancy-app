import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../../src/screens/SignUp';

test('renders correctly', () => {
  const tree = renderer.create(<SignUp />).toJSON();
  expect(tree).toMatchSnapshot();
});
