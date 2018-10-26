import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import { Provider } from "react-redux";
import stateLogger from "./enhancers/stateLogger";
import actionLogger from "./middlewares/actionLogger";
import App from "./containers/app.container";
import "./styles.css";

const enhancedStore = compose(
  stateLogger,
  applyMiddleware(actionLogger)
);
const store = createStore(reducers, enhancedStore);

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
