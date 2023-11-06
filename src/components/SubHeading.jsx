import React from 'react'

function SubHeading({text,className}) {
  return (
    <h2 className={`font-mon font-bold md:text-4xl text-2xl text-secondary  ${className}`}>{text}</h2>
  )
}

export default SubHeading