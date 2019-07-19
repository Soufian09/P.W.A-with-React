import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./App.css"
import Acceuil from "./components/Acceuil";
import Stuff from "./components/cadre";
import Contact from "./components/contact";
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Autrement ASBL</h1>
          <ul className="header">
            <li><NavLink to="/">Acceuil</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Acceuil}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>  
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App