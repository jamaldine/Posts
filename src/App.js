import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

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
  const [showNav, setShowNav] = useState(false);

  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
    createStore
  );

  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        {!home && (
          <Header
            {...props}
            home={home}
            handleHome={handleHome}
            showNav={showNav}
            setShowNav={setShowNav}
          />
        )}
        <Switch>
          <Route
            path="/posts"
            component={() => <Posts home={home}  />}
          />
          <Route
            path="/map"
            component={() => <Map home={home}  />}
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
