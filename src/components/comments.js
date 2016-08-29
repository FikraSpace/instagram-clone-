import React, {Component} from 'react';
import './comments.css'
import Comment from './comment'

class Comments extends Component {

  render(){
    return (
      <div className="card-comments">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    )
  }
}


export default Comments;