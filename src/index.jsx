import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {string} from 'prop-types';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import Form from './components/Form/Form';
import List from './components/List/List';

const App = () => <div>hey hey hey hey</div>;

const store = createStore(reducer);

const Card = () => (
  <div>
    Im the card! <button />
    <Link to="/">Go back</Link>
  </div>
);

const planets = [{id: 1, name: 'Mercury'}, {id: 2, name: 'Venus'}, {id: 3, name: 'Earth'}, {id: 4, name: 'Mars'}];

const data = {
  city: 'Moscow',
  country: 'Russia'
};

const Data = ({city, country}) => (
  <div>
    <div>
      City: <span>{city}</span>
    </div>
    <div>
      Country: <span>{country}</span>
    </div>
  </div>
);

Data.propTypes = {
  city: string.isRequired,
  country: string.isRequired
};

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
        <Data city={data.city} country={data.country} />
        <List list={planets} />
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/card" component={Card} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
