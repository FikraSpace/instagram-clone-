import React, {Component} from 'react';
import './card.css'
import Comments from './comments'
import CommentsInput from './comments-input'
class Card extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      post: {
        owner:'',
        date:'',
        url: '',
        location:'',
        comments:{}
      }
    };
  }


  timeConv(time){

    let date1 = new Date(time);
    let date2 = new Date(Date.now());
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffMin = Math.ceil(timeDiff / (1000 * 60 )); 

    return diffMin;
    
  }

  componentWillMount(){

    let date = this.timeConv(this.props.elm.date)

    let tmpObj = {
        owner: this.props.elm.owner,
        date: date,
        url: this.props.elm.url,
        location: this.props.elm.location,
        comments: this.props.elm.comments
    } 

    this.setState({
      post: tmpObj
    })
  }



  render(){



    return (


    <div className="card card-1">
      <div className="card-meta">
        <div className="card-owner">{

          this.state.post.owner


        }</div>
        <div className="card-time">
        {
          this.state.post.date
        }
        </div>
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