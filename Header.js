import React from 'react'
import Nav from './Nav'
const Header = () => {
  
  return (
    <header id='layout-header' className='layout__header'>
    <h1>Mi E-commerce</h1>
    <span class="material-icons">
     shop_2
    </span>

     <Nav/>
    </header>
  )
}

export default Header