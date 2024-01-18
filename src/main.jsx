import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {App, Person, CustomInput} from "./Greetings";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App/>
        <Person/>
        <CustomInput/>
    </React.StrictMode>
);
