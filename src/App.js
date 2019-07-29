import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          This is an POC for test TravisCI + AWS S3 + Slack notification
        </span>
      </header>
    </div>
  );
}

export default App;
