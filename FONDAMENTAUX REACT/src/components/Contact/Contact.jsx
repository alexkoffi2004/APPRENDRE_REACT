import React from 'react'
import SharedButton from '../SharedButton/SharedButton'

const Contact = ({props}) => {
  return(
    <>
    <h1> Contact </h1>
    <p>
      N'hesitez pas à me contacter pour toute demande de renseignement ou collaboration.
    </p>
     <SharedButton props={{name:'Envoyer'}} />
    </>
  ) 
}

export default Contact