import "./App.css";
import React from "react";
import { Home, Test1, Test2, Test3, HelloWorld } from "./routes";

//routes array 
const routes = [
  {
    name: 'Home',
    path: '/',
    component: <Home />
  },{
    name: 'Test 1',
    path: '/test1',
    component: <Test1 />
  },{
    name: 'Test 2',
    path: '/test2',
    component: <Test2 />
  },{
    name: 'Test 3',
    path: '/test3',
    component: <Test3 />
  },{
    name: 'Hello World',
    path: '/helloworld',
    component: <HelloWorld />
  }
]

const App = () => {
  return (
    <div className="app-container">
      {/*  header */}
      <header className="app-header">
        {/* Loop through routes array to create links in navbar */}
        {routes.map((route, index) => (
          <React.Fragment key={`navlink-${index}`}>
            <NavLinks 
              path={route.path} 
              name={route.name} 
              key={`navlink-${index}`}/>
          </React.Fragment >
        ))}
      </header>
      {/* body */}
      <div> 
        {/* loop through routes array to display routes */}
        {routes.map((route, index) =>  (
          <Route path={route.path} key={`display-${index}`}>
              {route.component}
          </Route>
        ))}
      </div>
    </div>
  );
};

//nav links component
const NavLinks = (props) => {
  const isActive = window.location.pathname === props.path;
  return (
      <a href={props.path} className={ isActive ? 'active-link' : 'inactive-link'}>
          {props.name}
      </a>
  )
}

//route component
const Route = (props) =>
  window.location.pathname === props.path ? (
    <React.Fragment>{props.children}</React.Fragment>
  ) : null;

export default App;
