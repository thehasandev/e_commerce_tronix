import React from 'react'

function SubHeading({text,className}) {
  return (
    <h2 className={`font-mon font-bold text-4xl text-secondary  ${className}`}>{text}</h2>
  )
}

export default SubHeading