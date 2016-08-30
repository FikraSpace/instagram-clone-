import React, {Component} from 'react';
import './cards-container.css'
import Card from './card.js';


class CardsContainer extends Component {

  render(){
    return (

        <div className="cards-container">

          {
            this.props.posts.map((elm, i)=>{
              return <Card key={i} />
            })
          }

        </div>


    )
  }
}


export default CardsContainer;