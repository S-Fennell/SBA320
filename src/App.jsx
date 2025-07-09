import { useState } from 'react';
import Welcome from './Welcome';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import BattleField from './BattleField';
import DragonBall from './DragonBall';

function App() {


  return (
    <>
    <nav class="navbar">
      <div>
        <h1>POKEMON BATTLE</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to='/'>Welcome</Link>
          </li>
          <li>
            <Link to='/battlefield'>The Battlefield</Link>
          </li>
          <li>
            <Link to='/dragonball'>Dragon Ball</Link>
          </li>
        </ul>
      </div>
    </nav>


    <Routes>
      <Route path='/' element={ <Welcome/>}/>
      <Route path='/battlefield' element={<BattleField/> }/>
       <Route path='/dragonball' element={ <DragonBall/> }/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </>
  )
}

export default App
