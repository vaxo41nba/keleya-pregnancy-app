import React from 'react';
import renderer from 'react-test-renderer';
import Notifications from '../../src/screens/Notifications';

test('renders correctly', () => {
  const tree = renderer.create(<Notifications />).toJSON();
  expect(tree).toMatchSnapshot();
});
