import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { ActiveNightmode } from './aSlice';
import React from 'react';

function Dashboard() {
  const a = useSelector(state => state.a);
  const dispatch = useDispatch();

  return (
      <div className='body'>
        <p>Trial: {a.Name}</p>
        <button onClick={(e) => {dispatch(ActiveNightmode)}}>Night Mode</button>
      </div>
  );
}

export default Dashboard;
