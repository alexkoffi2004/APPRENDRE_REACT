import React from 'react';
import './App.css'
import {Header} from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

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
  const { Project } = useLoaderData()
  return (
    <>
      <Header props={{navItem}} />
      <main>
        <Outlet context={{Project}}/>
      </main>
    </>
  )
}

export default App
