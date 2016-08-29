import React, {Component} from 'react';
import './card.css'
import Comments from './comments'
import CommentsInput from './comments-input'
class Card extends Component {

  render(){
    return (

    <div className="card card-1">
      <div className="card-meta">
        <div className="card-owner">Ali M. Ismail</div>
        <div className="card-time">22min</div>
      </div>
      <img className="card-img" src="https://placehold.it/200/300" alt="" />
      <div className="cards-likes"><b>128 like</b></div>
      <Comments />
      <CommentsInput />
    </div>

    )
  }
}


export default Card;