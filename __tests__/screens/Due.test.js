import React from 'react';
import renderer from 'react-test-renderer';
import Due from '../../src/screens/Due';

test('renders correctly', () => {
  const tree = renderer.create(<Due />).toJSON();
  expect(tree).toMatchSnapshot();
});
