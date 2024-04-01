import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./reducers";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
