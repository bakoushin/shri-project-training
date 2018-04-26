import React from 'react';
import {shallow} from 'enzyme';
import List from '../components/List/List';

const planets = [{id: 1, name: 'Mercury'}, {id: 2, name: 'Venus'}, {id: 3, name: 'Earth'}, {id: 4, name: 'Mars'}];

test('List rendres correctly', () => {
  const component = shallow(<List list={planets} />);
  expect(component.find('li').length).toEqual(planets.length);
});
