import React from 'react'
import { useState } from 'react';


const Content = () => {
    const [name, setName] = useState('Vitalii');
    const handleNameChange = () => {
        const names = ['Vitalii', 'Linette', 'Basil'];
        const int = Math.floor(Math.random()*3);
        setName(names[int]);
    }

  return (
    <main>
        <p>Hello {handleNameChange()}! </p>
        <button onClick={handleNameChange}>Click This</button>
    </main>
  )
}

export default Content