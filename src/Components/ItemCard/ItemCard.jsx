import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faFireAlt } from "@fortawesome/free-solid-svg-icons";
import "./ItemCard.scss";
class ItemCard extends Component {
  state = {};
  array = this.props.response;
  render() {
    return (
      <div className="item_card">
        <img src={this.array.attributes.posterImage.tiny} alt="" />
        <div className="row">
          <h2>{this.array.attributes.canonicalTitle}</h2>
          <span>{this.array.attributes.titles.ja_jp}</span>
          <div className="tags">
            <span className="avaliacoes">
              <FontAwesomeIcon icon={faStar} />{" "}
              {Math.round(this.array.attributes.averageRating / 10)}
            </span>
            <span>
              <FontAwesomeIcon icon={faUser} />{" "}
              {this.array.attributes.userCount}
            </span>
            <span>
              <FontAwesomeIcon icon={faFireAlt} />{" "}
              {this.array.attributes.popularityRank}
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />{" "}
              {this.array.attributes.ratingRank}
            </span>
            <span>{this.array.attributes.status}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
