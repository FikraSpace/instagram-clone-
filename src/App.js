import React, {Component} from 'react';
import firebase from 'firebase';
import './App.css';
import NavBar from './components/navbar.js';
import CardsContainer from './components/cards-container.js';

var config = {
    apiKey: "AIzaSyCcrwduu1RetcaiZ3kmYhoiDSQofooFMSM",
    authDomain: "instagram-clone-80f55.firebaseapp.com",
    databaseURL: "https://instagram-clone-80f55.firebaseio.com",
    storageBucket: "instagram-clone-80f55.appspot.com",
};

firebase.initializeApp(config);
  
class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      posts: []
    };
  }

  componentWillMount(){

    let posts = firebase.database().ref('/posts');

    posts.on('value', (snapshot)=>{
      
      let tmpArr = [];

      snapshot.forEach((snapshot)=>{
        
        tmpArr.push(snapshot.val())

      })

      this.setState({
          posts: tmpArr
      })

    })

  }


  render(){
    return (
      <div>
        <NavBar />
        <CardsContainer posts={this.state.posts} />
      </div>
    )
  }

}

export default App;