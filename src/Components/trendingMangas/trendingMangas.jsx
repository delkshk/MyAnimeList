import React, { Component } from "react";
import axios from "axios";
import ItemCard from '../ItemCard';
import "./trendingMangas.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faFireAlt,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
class trendingMangas extends Component {
  state = {
    MangasTrending: [],
  };

  async componentDidMount() {
    this.AtualizaLista();
  }

  AtualizaLista(sort = 'ratingRank'){
    var base = 'https://kitsu.io/api/edge/manga';
    axios
      .get(`${base}?sort=${sort}`, {
        headers: {},
      })
      .then((response) => {
        const MangasTrending = response.data;
        this.setState({ MangasTrending });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    if (this.state.MangasTrending.length !== 0) {
      return (
        <div>
          <button onClick={() => this.AtualizaLista("ratingRank")}><FontAwesomeIcon icon={faStar} />{" "} Ranking geral</button>
          <button onClick={() => this.AtualizaLista("-averageRating")}><FontAwesomeIcon icon={faStarHalfAlt} />{" "} Notas Gerais</button>
          <button onClick={() => this.AtualizaLista("-userCount")}><FontAwesomeIcon icon={faUser} />{" "} Leitores</button>
          <button onClick={() => this.AtualizaLista("popularityRank")}><FontAwesomeIcon icon={faFireAlt} />{" "} Popularidade</button>
          <button onClick={() => this.AtualizaLista("-favoritesCount")}><FontAwesomeIcon icon={faStar} />{" "} Favoritos</button>
          {this.state.MangasTrending.data.map((Mangas, index) => (
            <div key={Mangas.id} >
              <ItemCard
                response = {Mangas}
              ></ItemCard>
            </div>
          ))}
        </div>
      );
    } else {
      return (<div> <h2>Carregando Mangas!</h2> </div>) ;
    }
  }
}

export default trendingMangas;
