import React, { Component } from "react";
import axios from "axios";
import "./trendingAnimes.scss";
import ItemCard from '../ItemCard';
class trendingAnimes extends Component {
  state = {
    AnimesTrending: [],
  };
  async componentDidMount() {
    await axios
      .get(`https://kitsu.io/api/edge/trending/anime`, {
        headers: {},
      })
      .then((response) => {
        const AnimesTrending = response.data;
        this.setState({ AnimesTrending });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.AnimesTrending.length !== 0) {
      return (
        <div>
          {this.state.AnimesTrending.data.map((anime, index) => (
            <div key={anime.id} >
            <ItemCard
              response = {anime}
            ></ItemCard>
          </div>
          ))}
        </div>
      );
    } else {
      return (<div> <h2>Carregando animes!</h2> </div>) ;
    }
  }
}

export default trendingAnimes;
