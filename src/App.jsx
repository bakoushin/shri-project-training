import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {string} from 'prop-types';
import {Provider} from 'react-redux';
import store from './store/store';
import Form from './components/Form/Form';
import List from './components/List/List';

const Card = ({text}) => (
  <div>
    Im the card! <button />
    <p>{text}</p>
    <Link to="/">Go back</Link>
  </div>
);

Card.propTypes = {
  text: string.isRequired
};

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

const App = () => (
  <Fragment>
    <Data city={data.city} country={data.country} />
    <List list={planets} />
    <p>sssss</p>
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/card" component={() => <Card text="cool!" />} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </Fragment>
);

export default hot(module)(App);
