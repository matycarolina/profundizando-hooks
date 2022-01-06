import React from "react";
import ReactDOM from "react-dom";
import { Padre } from "../src/components/07-tarea-memo/Padre";
//import { CallbackHook } from "./components/06-memos/CallbackHook";
//import { MemoHook } from "./components/06-memos/MemoHook";
//import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
//import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
//import { FocusScreen } from "./components/04-useRef/FocusScreen";
//import { RealExampleRef } from "./components/04-useRef/RealExampleRef";
//import { LayoutEffect } from "./components/05-useLayoutEffect/LayoutEffect";
//import { Memorize } from "./components/06-memos/Memorize";
//import { SimpleForm } from "./components/01-useState/02-useEffect/SimpleForm";
//import { CounterApp } from "./components/01-useState/CounterApp";
//import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<Padre />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();