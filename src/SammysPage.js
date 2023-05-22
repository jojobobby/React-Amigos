// import logo from './logo.svg';
import './App.css';
// import React, { useState } from 'react';
import './SammysPage.css';

// function SammyPage(){
  // return(
  // <div className='player'>
  //   <span className='playerName'>Sammy</span>
  //   <div className='counter'>
  //     <button className='decrease'>-</button>
  //     <span className='counterScore'>35</span>
  //     <button className='increase'>+</button>
  //   </div>
  // </div>
  // );

//Making an array of player to be able to iterate through them.
const players = [
  {
    name: "Sammy",
    score: 50
  },
  {
    name: "Estrella",
    score: 30
  },
  {
    name: "Ben",
    score: 1
  },
  {
    name: "Angelo",
    score: 5
  }
];  

const Header = (props) => {
  return(
    <header>
      <h1 className='title'>{props.title}</h1>
    </header>
  )
};

const Player = (props) => {
  return(
  <div className='player'>
    <span className='playerName'>{props.name}</span>
    <Counter score = {props.score}/>
  </div>
  )
};

const Counter = (props) => {
  return(
  <div className='counter'>
    <button className='decrease'>-</button>
    <span className='counterScore'>{props.score}</span>
    <button className='increase'>+</button>
  </div>
  )
};

const ScoreBoard = (props) => {
  return(
    <div className='scoreBoard'>
    <Header title = "Scoreboard"/>
{/* 
    {props.initialPlayers.map} */}

    <Player name = "Sammy" score ={50}/>
    <Player name = "Sammy" score ={50}/>
    </div>
  )
};

// const App = (props) => {
//   return(
//     <div className='page'>
//       <ScoreBoard />
//     </div>
//   )
// };


// };
export default ScoreBoard;
