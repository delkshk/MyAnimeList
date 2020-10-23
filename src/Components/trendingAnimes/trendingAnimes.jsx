import React, { Component } from "react";
import axios from "axios";
import "./trendingAnimes.scss";
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
            <div key={anime.id} className="anime_card">
              <img
                src={anime.attributes.posterImage.tiny}
                alt=""
              />
              <div className="row">
                <h2>{anime.attributes.canonicalTitle}</h2>
                <span>{anime.attributes.titles.ja_jp}</span>
              </div>
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
