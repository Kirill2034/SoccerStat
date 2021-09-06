import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
    <ToastContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
