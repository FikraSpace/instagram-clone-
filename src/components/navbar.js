import React, {Component} from 'react';
import './navbar.css'

class NavBar extends Component {

  render(){
    return (


        <nav>
          <ul>
            <li className="logo">logo</li>
            <li>upload</li>
            <li><a href="/login">login</a></li>
          </ul>
        </nav>


    )
  }
}


export default NavBar;