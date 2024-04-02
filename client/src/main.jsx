import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import 'tailwindcss/tailwind.css';
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
