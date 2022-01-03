import { useEffect, useState } from "react";
import Left from "./components/Left";

import bg from "./assets/bg.svg";
import Right from "./components/Right";
import Top from "./components/Top";

function App() {
  return (
    <>
      <div className="App">
        <div className="bg">
          <div className="blue"></div>
          <div className="pink"></div>
          <div className="peach"></div>
        </div>
        <Top />
        <div className="main">
          <Left />
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
