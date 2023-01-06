import React from 'react'

function Button({text, onClick}) {
  return (
    <div>
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Button