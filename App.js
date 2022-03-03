import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
const App = () => {

  const persona={
    nombre: "Franco",
    edad:"23"
  }
  return (
       <>
      <Header/>
      <Main nombre="Franco" edad={23}/>
      <Footer/>
  </>
  )
}

export default App
