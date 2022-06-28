import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const redrawDOM = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          store={store}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

redrawDOM(store.getState());
store.subscribe(redrawDOM);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
