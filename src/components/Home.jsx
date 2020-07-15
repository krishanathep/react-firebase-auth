import React from "react";
import firebase from '../firebase'

const Home = (props) => {
    firebase.auth().onAuthStateChanged(user => {
        if (!user){
           alert('Please Login or Register!')
        }
    })
  return (
    <div className="Home container" align="center">
      <h3 className="mt-5">Hello : {props.user.email}<div className="text-primary">Your name is {props.user.displayName}?</div></h3>
      <button onClick={props.logOutUser} className='btn btn-primary'>Sing Out</button>
    </div>
  );
};

export default Home;
