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
function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/map" Component={Map} />
        <Route path="/" Component={Statistic} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
