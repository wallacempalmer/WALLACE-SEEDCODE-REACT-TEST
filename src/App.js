import "./App.css";
import React from "react";
import { Home, Test1, Test2, Test3 } from "./routes";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <a href="/" className="app-link">
          Home
        </a>
        <a href="/test1" className="app-link">
          Test 1
        </a>
        <a href="/test2" className="app-link">
          Test 2
        </a>
        <a href="/test3" className="app-link">
          Test 3
        </a>
      </header>
      <div>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/test1">
          <Test1 />
        </Route>
        <Route path="/test2">
          <Test2 />
        </Route>
        <Route path="/test3">
          <Test3 />
        </Route>
      </div>
    </div>
  );
};

const Route = (props) =>
  window.location.pathname === props.path ? (
    <React.Fragment>{props.children}</React.Fragment>
  ) : null;

export default App;
