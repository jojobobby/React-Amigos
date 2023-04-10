// import './App.css';
// import React, { useState } from 'react';
// import { ReactDOM } from 'react';
// import Counter from './raphealsFiles/components/counter';
// import Square from './raphealsFiles/components/square';
// import Grid from './raphealsFiles/components/grid';
// function RalphPage() {
//   return (
//     <Grid valueArray={[1,2,3,4,5]}/>
//   );
// }

// export default RalphPage;
import './App.css';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import Counter from './raphealsFiles/components/counter';
import Square from './raphealsFiles/components/square';
import Grid from './raphealsFiles/components/grid';

let turns = 0;

function incrementTurns() {
  turns++;
}

function nextValue() {
  if(turns % 2 === 0) {
    return "X"
  }
  return "O"
}

function gameOne() {

  return (
    //9 Squares
    <Grid valueArray={[nextValue(), nextValue(), nextValue(), nextValue(), nextValue(), nextValue(), nextValue(), nextValue(), nextValue()]}/>
  );
}

export default gameOne;