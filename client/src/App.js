import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link> | 
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <h2 className="App-title">Version 2</h2>
          <span>Fib calculator</span>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
