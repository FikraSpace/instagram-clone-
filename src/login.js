import React, {Component} from 'react';
import './login.css';
import firebase from 'firebase';



class Login extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      emailValue:'',
      passValue:'',
      hasErrors:false,
      error:''
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        location.href = '/'
      } else {
        // this.setState({
        //   hasErrors:true
        // })
      }
    });      
  }

  emailChange(evt){
    this.setState({
      emailValue: evt.target.value
    })
  }

  passChange(evt){
    this.setState({
      passValue: evt.target.value
    })
  }

  onClick(){
    
  firebase.auth().signInWithEmailAndPassword(this.state.emailValue, this.state.passValue).catch(function(error) {
      // Handle Errors here.
      this.setState({
        hasErrors:false
      })
      var errorCode = error.code;
      var errorMessage = error.message;
    
      if (errorCode || errorMessage) {
        this.setState({
          hasErrors:true,
          error: errorMessage
        })
      }
     
  });


  }

  render(){
    let errors_class = ''
    if (this.state.hasErrors === true) {
      errors_class = 'errors-container-enabled'
    }

    return (
          <div className="wrapper">
            <div className="login-container">
             <div className="title">
               login to be able to upload photos
             </div>
             <input  onChange={this.emailChange.bind(this)} value={this.state.emailValue}  type="email" />
             <input max="10" onChange={this.passChange.bind(this)} value={this.state.passValue} type="password" />
             <button onClick={this.onClick.bind(this)}>login</button>
             <div className={'errors-container ' + errors_class}>

             </div>
           </div>
          </div>


      )
  }
}

export default Login;