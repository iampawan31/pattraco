import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="h-12 font-sans font-light uppercase flex justify-center items-center">
      <div>Pattraco - {currentYear}</div>
    </div>
  )
}

export default Footer
