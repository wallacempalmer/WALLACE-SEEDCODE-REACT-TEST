import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import fetchMock from "fetch-mock";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const people = [
  {
    name: "Brian Dodd",
    id: 0
  },
  {
    name: "Amin Shariat",
    id: 1
  },
  {
    name: "Sandra Johnson",
    id: 2
  },
  {
    name: "Alice Chu",
    id: 3
  },
];

fetchMock.config.fallbackToNetwork = true;

fetchMock.get("http://test.seedcode.com/getPeople", {
  status: 200,
  body: people
});
fetchMock.post("http://test.seedcode.com/createEvent", 201, { delay: 1500 });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

