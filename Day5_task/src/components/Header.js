import React from 'react'

function Header({ head }) {
  return (
    <div className='Header'>
        <h1>{head.welcome}</h1>
        <h2>{head.title}</h2>
        <h3>{head.subtitle}</h3>

    </div>
  )
}

export default Header