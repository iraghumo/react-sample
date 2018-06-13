import React, { Component } from "react";
import { Provider } from "react-redux";

import './styles/styles.css';
import store from "./store";
import Home from "./Home";

export default () =>
  <Provider store={store}>
    <Home />
  </Provider>;
