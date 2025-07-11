import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import DragonBall from './DragonBall';
import PokeMon from './Pokemon';
import Home from './Home';
import ZFigthers from './ZFighters';

function App() {


  return (
    <>
    <nav className="navbar">
      <div>
        <h1>Anime Characters</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to='/'>Welcome</Link>
          </li>
          <li>
            <Link to='/dragonball'>Dragon Ball</Link>
          </li>
            <li>
            <Link to='/pokemon'>Pokemon</Link>
          </li>
        </ul>
      </div>
    </nav>


    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/pokemon' element={<PokeMon/> }/>
      <Route path='/dragonball' element={ <DragonBall/> }/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </>
  )
}

export default App
