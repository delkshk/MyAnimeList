import React, { Component } from "react";
import axios from "axios";
import ItemCard from '../ItemCard';
import "./trendingMangas.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faFireAlt,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
class trendingMangas extends Component {
  state = {
    MangasTrending: [],
  };

  async componentDidMount() {
    this.AtualizaLista();
  }

  AtualizaLista(sort = 'ratingRank'){
    var base = 'https://kitsu.io/api/edge/manga';
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
        const MangasTrending = response.data;
        this.setState({ MangasTrending });
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
    if (this.state.MangasTrending.length !== 0) {
      return (
        <div>
          <div id="filtros">
            <input type="hidden" name="ordenacao" id="ordenacao" value="ratingRank"/>
            <button onClick={() => this.AtualizaLista("ratingRank")}><FontAwesomeIcon icon={faStar} />{" "} Ranking geral</button>
            <button onClick={() => this.AtualizaLista("-averageRating")}><FontAwesomeIcon icon={faStarHalfAlt} />{" "} Notas Gerais</button>
            <button onClick={() => this.AtualizaLista("popularityRank")}><FontAwesomeIcon icon={faFireAlt} />{" "} Popularidade</button>
            <button onClick={() => this.AtualizaLista("-favoritesCount")}><FontAwesomeIcon icon={faStar} />{" "} Favoritos</button>
          </div>
         
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
