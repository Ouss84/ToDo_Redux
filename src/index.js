import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import reducer from "./components/store/reducer";
import { Provider } from "react-redux";
const store = createStore(reducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
