import React from "react";

const Home = (props) => {
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
