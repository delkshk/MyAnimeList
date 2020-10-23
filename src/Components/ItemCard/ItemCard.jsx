import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faFireAlt,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "./ItemCard.scss";
class ItemCard extends Component {
  state = {};
  array = this.props.response;

  render() {
    return (
      <div className="item_card">
        {this.array.attributes.posterImage === null ? this.array.attributes.posterImage = '' : ""}
        <img src={this.array.attributes.posterImage.tiny} alt="" />
        <div className="row">
          <h2>{this.array.attributes.canonicalTitle}</h2>
          <span>{this.array.attributes.titles.ja_jp}</span>
          <div className="tags">
            <span className="ratingRank">
              <FontAwesomeIcon icon={faStar} />{" "}
              {this.array.attributes.ratingRank}
            </span>
            <span className="avaliacoes averageRating">
              <FontAwesomeIcon icon={faStarHalfAlt} />{" "}
              {Math.round(this.array.attributes.averageRating / 10)}
            </span>
            <span className="userCount">
              <FontAwesomeIcon icon={faUser} />{" "}
              {this.array.attributes.userCount}
            </span>
            <span className="popularityRank">
              <FontAwesomeIcon icon={faFireAlt} />{" "}
              {this.array.attributes.popularityRank}
            </span>
            <span className="favoritesCount">
              <FontAwesomeIcon icon={faStar} />{" "}
              {this.array.attributes.favoritesCount}
            </span>
            <span className="status">{this.array.attributes.status}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
