import React from 'react';
import {shallow} from 'enzyme';
import Form from '../components/Form/Form';

describe('Form', () => {
  it('rendres correctly', () => {
    const component = shallow(<Form />);
    expect(component).toMatchSnapshot();
  });

  it('rendres correct text based on input', () => {
    const inputText = 'hello world';
    const component = shallow(<Form />);
    component.find('input').simulate('change', {target: {value: inputText}});
    expect(component.find('.Form-Data').text()).toEqual(inputText);
  });
});
