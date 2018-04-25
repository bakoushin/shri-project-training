import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './Form.scss';

const Form = () => (
  <div className="Form">
    <h1>Hey! </h1>
    <p>Blah blah blah</p>
    <BrowserRouter>
      <Link to="/card">card</Link>
    </BrowserRouter>
  </div>
);

export default Form;
