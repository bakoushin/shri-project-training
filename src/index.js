import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';

class App extends React.Component {
  render() {
    return(
      <div>hey hey hey hey</div>
    );
  }
}

const store = createStore(reducer);



ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
