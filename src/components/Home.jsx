import React from "react";
import firebase from '../firebase'

const Home = (props) => {
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      console.log('Hello',user.displayName)
    } else {
      window.location = '/'

      console.log('Please Login!')
    }
  }) 

  return (
    <div className="Home container" align="center">
      <h5 className="mt-5">Hello : {props.user.displayName}</h5>
      <button 
      onClick={props.logOutUser} 
      className='btn btn-primary'
      >Sing Out
      </button>
    </div>
  );
};

export default Home;
