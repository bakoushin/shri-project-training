import React from 'react';
import {Link} from 'react-router-dom';
import {string, func} from 'prop-types';
import {connect} from 'react-redux';
import {setInputData} from '../../store/actionCreators';
import Status from '../Status/Status';
import './Form.scss';

const Form = props => (
  <div className="Form">
    <h1>Hey! </h1>
    <p>Blah blah blah</p>
    <input type="text" value={props.inputData} onChange={props.inputChangeHandler} />
    <p className="Form-Data">{props.inputData}</p>
    <Link to="/card">card</Link>
    <Status />
  </div>
);

Form.propTypes = {
  inputData: string.isRequired,
  inputChangeHandler: func.isRequired
};

function mapStateToProps(state) {
  return {inputData: state.inputData};
}

function mapDispatchToProps(dispatch) {
  return {
    inputChangeHandler(event) {
      dispatch(setInputData(event.target.value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
