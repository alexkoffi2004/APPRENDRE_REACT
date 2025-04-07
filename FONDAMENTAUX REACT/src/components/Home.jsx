import React from 'react'
import Presentation from './Presentation/Presentation';
import Projet from './Projet/Projet';
import Contact from './Contact/Contact';
import { useOutletContext } from 'react-router-dom';


const Home =() => {
    const { Project } = useOutletContext();
    return(
        <>
        <Presentation/>
        <Projet ProjectData={Project}/>
        <Contact/>
        </>
    )
}

export default Home