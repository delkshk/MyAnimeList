import React, { Component } from "react";
import axios from "axios";
import ItemCard from '../ItemCard';
import "./trendingMangas.scss";
class trendingMangas extends Component {
  state = {
    MangasTrending: [],
  };
  async componentDidMount() {
    await axios
      .get(`https://kitsu.io/api/edge/trending/Mangas`, {
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
