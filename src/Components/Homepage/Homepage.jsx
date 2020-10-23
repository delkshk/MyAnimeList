import React, { Component } from "react";
import TrendingAnimes from "../trendingAnimes";
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/TrendingAnimes">TrendingAnimes</Link>
                </li>
                <li>
                  <Link to="/TrendingMangas">TrendingMangas</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="content">
            <Switch>
              <Route path="/TrendingAnimes">
                <TrendingAnimes></TrendingAnimes>
              </Route>
              <Route path="/TrendingMangas">
                <TrendingAnimes></TrendingAnimes>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Homepage;
