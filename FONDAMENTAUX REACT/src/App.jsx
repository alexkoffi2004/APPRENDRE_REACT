import React from 'react';
import './App.css'
import {Header} from './components/Header';
import { Outlet } from 'react-router-dom';

const navItem = [
  {
    title: "Presentation",
    link: "/Presentation"
  },
  {
    title: "Projet",
    link:"/Projet"
  },
  {
    title: "Contact",
    link:"/Contact"
  }
]
const App = () => {
  return (
    <>
      <Header props={{navItem}} />
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
