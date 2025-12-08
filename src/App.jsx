import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Inicio from './components/Home'
import Social from './components/Social'

function App () {
  return (
    <div>
      <NavBar />
      <Inicio />
      <Sobre />
      <Projetos />
      <Social />      
    </div>
  );
}

export default App
