import React, { Component } from "react";
import axios from "axios";
import "./Animes.scss";
import ItemCard from '../ItemCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faFireAlt,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
class Animes extends Component {
  state = {
    AnimesTrending: [],
  };
  async componentDidMount() {
    this.AtualizaLista();
  }

  AtualizaLista(sort = 'ratingRank'){
    var base = 'https://kitsu.io/api/edge/anime';
    if (document.getElementById('ordenacao') != null) {
      var ordemAtual = document.getElementById('ordenacao').value;
    }
    if (sort === ordemAtual ) {
      if (sort.includes("-")) {
        sort = sort.substring(1);
      }else{
        sort = "-"+sort;
        
      }
    }
    document.getElementById("content").style.opacity = 0;
    axios
      .get(`${base}?sort=${sort}`, {
        headers: {},
      })
      .then((response) => {
        const AnimesTrending = response.data;
        this.setState({ AnimesTrending });
        document.getElementById("content").style.opacity = 1;
        // 
        document.getElementById("content").style.opacity = 1;
        if (document.getElementById('ordenacao') != null) {
          document.getElementById('ordenacao').value = sort;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.AnimesTrending.length !== 0) {
      return (
        <div>
          <div id="filtros">
            <input type="hidden" name="ordenacao" id="ordenacao" value="ratingRank"/>
            <button onClick={() => this.AtualizaLista("ratingRank")}><FontAwesomeIcon icon={faStar} />{" "} Ranking geral</button>
            <button onClick={() => this.AtualizaLista("-averageRating")}><FontAwesomeIcon icon={faStarHalfAlt} />{" "} Notas Gerais</button>
            <button onClick={() => this.AtualizaLista("popularityRank")}><FontAwesomeIcon icon={faFireAlt} />{" "} Popularidade</button>
            <button onClick={() => this.AtualizaLista("-favoritesCount")}><FontAwesomeIcon icon={faStar} />{" "} Favoritos</button>
          </div>
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

export default Animes;
