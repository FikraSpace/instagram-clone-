import React, {Component} from 'react';
import './comments-input.css'

class CommentsInput extends Component {

  render(){
    return (
      <div className="insert-comment">
        <input placeholder="write a comment" type="text"/>
      </div>
    )
  }
}


export default CommentsInput;