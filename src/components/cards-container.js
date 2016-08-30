import React, {Component} from 'react';
import './cards-container.css'
import Card from './card.js';


class CardsContainer extends Component {

  render(){
    return (

        <div className="cards-container">

          {
            this.props.posts.map((elm, i)=>{
              return <Card key={elm.id} elm={elm}/>
            })
          }

        </div>


    )
  }
}


export default CardsContainer;