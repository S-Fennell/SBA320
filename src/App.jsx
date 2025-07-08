import { useState } from 'react';
import Welcome from './Welcome';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import BattleField from './BattleField';

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
        </ul>
      </div>
    </nav>


    <Routes>
      <Route path='/' element={ <Welcome/>}/>
      <Route path='/battlefield' element={<BattleField/> }/>
    </Routes>
    </>
  )
}

export default App
