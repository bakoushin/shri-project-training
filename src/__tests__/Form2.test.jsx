import React from 'react';
import {shallow} from 'enzyme';
import Form from '../components/Form/Form';

test('Form rendres correctly', () => {
  const component = shallow(<Form />);
  expect(component).toMatchSnapshot();
});
