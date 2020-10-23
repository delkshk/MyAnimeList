import React, { Component } from 'react';
import TrendingAnimes from '../trendingAnimes';
import "./homepage.scss";
class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="Homepage">
                <div className="sidebar"></div>
                <div className="content">
                    <TrendingAnimes></TrendingAnimes>
                </div>
            </div>
         );
    }
}
 
export default Homepage;