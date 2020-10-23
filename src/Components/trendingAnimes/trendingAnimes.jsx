import React, { Component } from "react";
import axios from "axios";
import "./trendingAnimes.scss";
import ItemCard from '../ItemCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faFireAlt,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
class trendingAnimes extends Component {
  state = {
    AnimesTrending: [],
  };
  async componentDidMount() {
    this.AtualizaLista();
  }

  AtualizaLista(sort = 'ratingRank'){
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
          <button onClick={() => this.AtualizaLista("ratingRank")}><FontAwesomeIcon icon={faStar} />{" "} Ranking geral</button>
          <button onClick={() => this.AtualizaLista("-averageRating")}><FontAwesomeIcon icon={faStarHalfAlt} />{" "} Notas Gerais</button>
          <button onClick={() => this.AtualizaLista("-userCount")}><FontAwesomeIcon icon={faUser} />{" "} Leitores</button>
          <button onClick={() => this.AtualizaLista("popularityRank")}><FontAwesomeIcon icon={faFireAlt} />{" "} Popularidade</button>
          <button onClick={() => this.AtualizaLista("-favoritesCount")}><FontAwesomeIcon icon={faStar} />{" "} Favoritos</button>
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
