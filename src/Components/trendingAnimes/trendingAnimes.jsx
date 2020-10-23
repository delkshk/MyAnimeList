import React, { Component } from "react";
import axios from "axios";
import "./trendingAnimes.scss";
import ItemCard from '../ItemCard';
class trendingAnimes extends Component {
  state = {
    AnimesTrending: [],
  };
  async componentDidMount() {
    this.AtualizaLista();
  }

  AtualizaLista(sort = 'popularityRank'){
    var base = 'https://kitsu.io/api/edge/anime';
    axios
      .get(`${base}?sort=${sort}`, {
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
          <button onClick={() => this.AtualizaLista("popularityRank")}>Popularidade</button>
          <button onClick={() => this.AtualizaLista("ratingRank")}>Ranking</button>
          <button onClick={() => this.AtualizaLista("-userCount")}>userCount</button>
          <button onClick={() => this.AtualizaLista("-averageRating")}>averageRating</button>
          <button onClick={() => this.AtualizaLista("-favoritesCount")}>favoritesCount</button>
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
