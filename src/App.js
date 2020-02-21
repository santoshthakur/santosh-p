import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Main.css'
import Asidesect from './components/Asidesect';
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'



import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Router>
          <Asidesect />
           <div className="site-main">
             <div className="main-section portfolio-section">
                <Switch>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/portfolio">
                      <Portfolio />
                    </Route>
                    <Route path="/contact">
                      <Contact />
                    </Route>  
                </Switch>
              </div>
           </div>

          

          </Router>

    </div>
  );
}

export default App;
