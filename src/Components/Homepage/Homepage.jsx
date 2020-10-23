import React, { Component } from "react";
import Animes from "../Animes";
import Mangas from "../Mangas";
import "./homepage.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Homepage extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div id="Homepage">
          <div className="sidebar">
            <nav>
              <ul>
                <li>
                  <Link className="button" to="/Animes">Animes</Link>
                </li>
                <li>
                  <Link className="button" to="/Mangas">Mangas</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div id="content" className="content">
            <Switch>
              <Route path="/Animes">
                <Animes></Animes>
              </Route>
              <Route path="/Mangas">
                <Mangas></Mangas>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Homepage;
