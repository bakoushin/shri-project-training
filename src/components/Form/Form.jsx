import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import Status from '../Status/Status';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: ''
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  inputChangeHandler(event) {
    this.setState({inputData: event.target.value});
  }
  render() {
    return (
      <div className="Form">
        <h1>Hey! </h1>
        <p>Blah blah blah</p>
        <input type="text" value={this.state.inputData} onChange={this.inputChangeHandler} />
        <p className="Form-Data">{this.state.inputData}</p>
        <BrowserRouter>
          <Link to="/card">card</Link>
        </BrowserRouter>
        <Status />
      </div>
    );
  }
}

export default Form;
