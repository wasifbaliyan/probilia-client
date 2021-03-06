import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

if ("login" in localStorage) {
  const login = JSON.parse(localStorage.getItem("login"));
  axios.defaults.headers.common["authorization"] = `Bearer ${login.token}`;
}

console.log(
  "Hey Developer,\n\nHope you're doing fine.\nThanks for stopping by.\n\n@wasifbaliyan"
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
