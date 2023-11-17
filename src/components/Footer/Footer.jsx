import React from 'react'
import imglogo from '../../images/iconlogo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='logo'>
            <img src={imglogo} alt='logo'></img>
        </div>
        <div></div>
    </footer>
  )
}

export default Footer