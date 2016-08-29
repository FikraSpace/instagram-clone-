import React, {Component} from 'react';
import './cards-container.css'
import Card from './card.js';


class CardsContainer extends Component {

  render(){
    return (

        <div className="cards-container">
          <Card />
          <Card />
        </div>


    )
  }
}


export default CardsContainer;