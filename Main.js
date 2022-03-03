import React from 'react'

const Main = ({nombre, edad}) => {
    
  return (
    <main>
        <h2> Bienvenido {nombre}</h2>
        <p>Tu edad es {edad}</p>
    </main>
  )
}

export default Main;