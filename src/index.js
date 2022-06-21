import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let usersData = [
  { id: 1, name: "Katya" },
  { id: 2, name: "Roman" },
  { id: 3, name: "Dimon" },
];

let messagesData = [
  { id: 1, message: "Where am I?" },
  { id: 2, message: "I don't know" },
  { id: 3, message: ":(" },
  { id: 4, message: "Hello there" },
];

let postData = [
  { id: 1, message: "Hi, how are you?", like: 15 },
  { id: 2, message: "Hello everyone!", like: 39 },
  { id: 3, message: "JavaScript or...", like: 120325 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        usersData={usersData}
        messagesData={messagesData}
        postData={postData}
      />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
