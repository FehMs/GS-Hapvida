import React from 'react'
import './banner.css'
import banner from '../../images/bannerog.png'

const Banner = () => {
  return (
    <div className='banner'>
        <img src={banner} alt='banner'></img>
    </div>
  )
}

export default Banner