import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../components/Form/Form';

test('Form rendres correctly', () => {
  const component = renderer.create(<Form />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
