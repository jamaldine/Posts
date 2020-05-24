import React from "react";
import {
  Route,
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Switch,
} from "react-router-dom";

import Posts from "./Containers/Posts";
import Statistic from "./Containers/Statistic";
import Map from "./Containers/Map";
import Header from "./Containers/Header";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
function App(props) {
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/map" Component={Map} />
          <Route path="/" Component={Statistic} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
