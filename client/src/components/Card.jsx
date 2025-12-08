import React from 'react'
import '../styles/Card.css'

const Card = ({ title , quantity , stock }) => {


  return (
    <div className='card'>
        <div className='container'>
        <p className='title'> {title} </p>
        <h1 className='quantity'>{quantity}</h1>
        <p className='stock'> {stock} </p>
        </div>

    </div>
  )
}

export default Card