import './App.css';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import Counter from './raphealsFiles/components/counter';
import Square from './raphealsFiles/components/square';
import Grid from './raphealsFiles/components/grid';

let turns = 0;

function incrementTurns() {
  this.turns++;
  this.nextValue();
}

function nextValue() {
  if(this.turns % 2 === 0) {
    return "X"
  }
  return "O"
}

function gameOne() {
  const Why = new Grid(); 
  return (
    //9 Squares
    <Why valueArray={["", "", "", "", "", "", "", "", ""]}/>
  );
}

export default RalphPage;