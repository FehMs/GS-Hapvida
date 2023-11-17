import React from 'react'
import { VscAccount } from "react-icons/vsc";
import Linha from '../Linha/Linha';
import iconlogo from '../../images/iconlogo.png'
import './nav.css'

const nav = () => {
  return (
    <>
    <header>
        <img src={iconlogo} alt="logo"/>
        <div className='nav'>
            <a className='right'>Home</a>
            <a>Quem somos</a>
        </div>
        <div className='nav-login'>
            <VscAccount size={40} color="#000"/>
        </div>
    </header>
    </>
  )
}

export default nav