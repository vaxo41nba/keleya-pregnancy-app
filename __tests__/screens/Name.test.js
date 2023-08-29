import React from 'react';
import renderer from 'react-test-renderer';
import Name from '../../src/screens/Name';

test('renders correctly', () => {
  const tree = renderer.create(<Name />).toJSON();
  expect(tree).toMatchSnapshot();
});
