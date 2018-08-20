import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button userName="hank" isLoggedIn={false} />
      <Button userName="bizz" isLoggedIn={false} />
      <Button userName="laura" isLoggedIn={false} />
      <Button userName="saoirse" isLoggedIn={false} />
      <Button userName="sylvie" isLoggedIn={false} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
