import logo from "./logo.svg";
import "./App.css";
import React, { ReactChild, ReactChildren, ReactNode, useState } from "react";
import { Test1, Test2, Test3 } from "./routes";

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

// const routes = [
//   { name: "Home", path: "/", component: <Test1 /> },
//   { name: "Test 1", path: "/test1", component: <Test1 /> },
//   { name: "Test 2", path: "/test2", component: <Test2 /> },
// ];

// const App = () => {
//   return (
//     <div className="app-container">
//       <header className="app-header">
//         {routes.map((r) => (
//           <a key={r.path} href={r.path} className="app-link">
//             {r.name}
//           </a>
//         ))}
//       </header>
//       <div>
//         {routes.map((r) => (
//           <Route key={r.path} path={r.path}>
//             {r.component}
//           </Route>
//         ))}
//       </div>
//     </div>
//   );
// };

interface RouteProps {
  path: string;
  children: React.ReactNode;
}

const Route = (props: RouteProps) =>
  window.location.pathname === props.path ? (
    <React.Fragment>{props.children}</React.Fragment>
  ) : null;

export default App;
