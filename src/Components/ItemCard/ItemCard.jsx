import React, { Component } from "react";
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
            <span>{this.array.attributes.averageRating}</span>
            <span>{this.array.attributes.userCount}</span>
            <span>{this.array.attributes.popularityRank}</span>
            <span>{this.array.attributes.ratingRank}</span>
            <span>{this.array.attributes.status}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
