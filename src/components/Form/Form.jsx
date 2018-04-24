import React from 'react';
import {Link} from 'react-router-dom';
import './Form.scss';

const Form = () => (
  <div className="Form">
    <h1>Hey! </h1>
    <p>Blah blah blah</p>
    <Link to="/card">card</Link>
  </div>
);

export default Form;
