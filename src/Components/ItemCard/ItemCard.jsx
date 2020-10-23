import React, { Component } from 'react';
import './ItemCard.scss';
class ItemCard extends Component {
    state = { }
    render() { 
        return (
        <div className="item_card">
        <img
          src={this.props.response.attributes.posterImage.tiny}
          alt=""
        />
        <div className="row">
          <h2>{this.props.response.attributes.canonicalTitle}</h2>
          <span>{this.props.response.attributes.titles.ja_jp}</span>
          <div className="tags">
            <span>{this.props.response.attributes.averageRating}</span>
            <span>{this.props.response.attributes.userCount}</span>
            <span>{this.props.response.attributes.popularityRank}</span>
            <span>{this.props.response.attributes.ratingRank}</span>
            <span>{this.props.response.attributes.status}</span>
          </div>
        </div>
      </div>
       );
    }
}
 
export default ItemCard;