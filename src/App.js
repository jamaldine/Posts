import React, { useState } from "react";
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
import Login from "./Containers/Login";
import Header from "./Containers/Header";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import { Provider } from "react-redux";
import reducers from "./reducers";

function App(props) {
  const [home, setHome] = useState(false);
  const handleHome = () => {
    setHome(!home);
  };

  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
    createStore
  );

  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Header {...props} home={home} handleHome={handleHome} />
        <Switch>
          <Route
            path="/posts"
            component={() => <Posts home={home} handleHome={handleHome} />}
          />
          <Route
            path="/map"
            component={() => <Map home={home} handleHome={handleHome} />}
          />
          <Route
            path="/statistic"
            component={() => <Statistic home={home} handleHome={handleHome} />}
          />
          <Route
            path="/"
            exact
            component={() => <Login home={home} handleHome={handleHome} />}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
