import React, { Component } from "react";
import axios from "axios";
import ItemCard from '../ItemCard';
import "./trendingMangas.scss";
class trendingMangas extends Component {
  state = {
    MangasTrending: [],
  };

  async componentDidMount() {
    this.AtualizaLista();
  }

  AtualizaLista(sort = 'popularityRank'){
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
          <button onClick={() => this.AtualizaLista("popularityRank")}>Popularidade</button>
          <button onClick={() => this.AtualizaLista("ratingRank")}>Ranking</button>
          <button onClick={() => this.AtualizaLista("-userCount")}>userCount</button>
          <button onClick={() => this.AtualizaLista("-averageRating")}>averageRating</button>
          <button onClick={() => this.AtualizaLista("-favoritesCount")}>favoritesCount</button>
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
