import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import iconlogo from '../../images/iconlogo.png'
import './nav.css'

const nav = () => {
  return (
    <>
    <header>
        <div className='logo'>
            <Link to="/"><img src={iconlogo} alt="logo"/></Link>
            <Link to="/"><h2 className='h2logo'>HAPVIDA</h2></Link>
        </div>
        <div className='nav'>
            <Link className='right' to="/">Home</Link>
            <Link to="/sobre">Quem Somos</Link>
        </div>
        <div className='nav-login'>
            <VscAccount size={40} color="#000"/>
        </div>
    </header>
    </>
  )
}

export default nav