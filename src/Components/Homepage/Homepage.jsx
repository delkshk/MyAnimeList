import React, { Component } from "react";
import TrendingAnimes from "../trendingAnimes";
import TrendingMangas from "../trendingMangas";
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
                  <Link className="button" to="/TrendingAnimes">Animes</Link>
                </li>
                <li>
                  <Link className="button" to="/TrendingMangas">Mangas</Link>
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
                <TrendingMangas></TrendingMangas>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Homepage;
