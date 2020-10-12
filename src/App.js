import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Daylist from "./component/dayList";
import Header from "./component/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Daylist />
    </div>
  );
}

export default App;
