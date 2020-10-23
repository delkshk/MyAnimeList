import React, { Component } from "react";
import axios from "axios";
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
            <div key={Mangas.id} className="mangas_card">
              <img
                src={Mangas.attributes.posterImage.tiny}
                alt=""
              />
              <div className="row">
                <h2>{Mangas.attributes.canonicalTitle}</h2>
                <span>{Mangas.attributes.titles.ja_jp}</span>
                <div className="tags">
                  <span>{Mangas.attributes.averageRating}</span>
                  <span>{Mangas.attributes.userCount}</span>
                  <span>{Mangas.attributes.popularityRank}</span>
                  <span>{Mangas.attributes.ratingRank}</span>
                  <span>{Mangas.attributes.status}</span>
                </div>
              </div>
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
