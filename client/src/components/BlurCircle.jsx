import React from 'react'

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto"
}) => {
  return (
    <div
      className="absolute -z-10 pointer-events-none h-72 w-72 rounded-full bg-pink-500 opacity-40 blur-[120px]"
      style={{ top, left, right, bottom }}
    />
  )
}

export default BlurCircle
