import React from 'react';
import {string, number, arrayOf, shape} from 'prop-types';

const List = ({list}) => <ul>{list.map(({id, name}) => <li key={id}>{name}</li>)}</ul>;

List.propTypes = {
  list: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired
    })
  ).isRequired
};

export default List;
