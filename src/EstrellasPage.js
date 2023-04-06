// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Board() {
  
  return (
    <div className='board'>
        <h1 className='title'>Tic Tac Toe</h1>
      <div>
        <Square />
        <Square />
        <Square />
      </div>

      <div>
        <Square />
        <Square />
        <Square />
      </div>

      <div>
        <Square />
        <Square />
        <Square />
      </div>

      <Array />
      <Object />

    </div>
  )

  }

  function Array(){
    const candy = ['starburst', 'skittes', 'm&m', 'WarHeads'];
    console.log(candy)
  }

  function Object () {
    const colors ={
      Sammy : "beige",
      Estrella : "Purple",
      Liz: "red"
    }

    console.log(colors);
  }

  function Square (){

    const [value, setValue] = useState(null);

    function handleClick(){
      setValue('X');
    }

    return(
        <button className='square' onClick={handleClick}>{value}</button>
    )
  }



export default Board;