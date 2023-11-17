import React from 'react'
import './apresentacao.css'
import hpimage from '../../images/Hospital wheelchair.png'
import Linha from '../Linha/Linha'

const apresentacao = () => {
  return (
    <>
    <section>
        <article className='box'>
            <h3>Serviços</h3>
            <div className='container'>
                <p ><strong>Consultar exames:</strong> Clique para ver os dias dos exames que já foram marcados.</p>
                <button>Ver</button>
            </div>
            <div className='linha'>
                <ul className="separador">
                    <li></li>
                </ul>
            </div>
            <div className='container'>
                <p ><strong>Marcar exames:</strong> Marque exames no conforto da sua casa, rapido e fácil. </p>
                <button>Ver</button>
            </div>
            <div className='linha'>
                <ul className="separador">
                    <li></li>
                </ul>
            </div>
            <div className='container'>
                <p ><strong>Nossos produtos:</strong> Tenha uma vida mais saudavel com os melhores produtos do mercado. </p>
                <button>Ver</button>
            </div>
        </article>
        <article>
            <img src={hpimage} alt='imagem-hospital'></img>
        </article>

    </section>
    <Linha/>

    </>
  )
}

export default apresentacao