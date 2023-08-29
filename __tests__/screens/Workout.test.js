import React from 'react';
import renderer from 'react-test-renderer';
import Workout from '../../src/screens/Workout';

test('renders correctly', () => {
  const tree = renderer.create(<Workout />).toJSON();
  expect(tree).toMatchSnapshot();
});
