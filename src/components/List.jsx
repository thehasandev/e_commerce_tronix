import React from 'react'

function List({text,side,className}) {
  return (
    <li className={`font-pop font-normal  text-small cursor-pointer  ${side? "mb-8 text-gray hover:text-secondary" : "mb-0 text-secondary"} ${className}`}>{text}</li>
  )
}

export default List