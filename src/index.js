import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const redrawDOM = (store) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        {/* STOP ON 43 React JS Практика - container component (контейнерная компонента) 24:16 */}
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

redrawDOM(store);

store.subscribe(() => {
  redrawDOM(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
