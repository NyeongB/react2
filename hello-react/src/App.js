import React from 'react';
import './App.css';

function App(){
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }
  return (
    <div>
      <div style={style}>{name}</div>
      <div className='react'>{name}</div>
    </div>
  )
  //return <div style={style}>{name}</div>
}
export default App;
