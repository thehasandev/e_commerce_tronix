import React from 'react'

function List({text,className}) {
  return (
    <li className={`font-pop font-normal text-secondary text-small ${className}`}>{text}</li>
  )
}

export default List