import React from 'react'
import './HeStyle.css'

const Card = ({item}) => {
  return (
    <div className='container-card'>
        <div><p>ID: {item._id}</p></div>
        <div><p>Title: {item.title}</p></div>
        <div><p>Price: {item.price}</p></div>
        <div><a href={item.imageUrl}>Image URL</a></div>
    </div>
  )
}

export default Card