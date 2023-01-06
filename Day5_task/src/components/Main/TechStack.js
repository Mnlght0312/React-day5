import React from 'react'

function TechStack({techno4k}) {
  return (
    <div>
        <h2>Teach Stack:</h2>
        
        <ul>
            {
                techno4k.map((e) => (<li>{e}</li>))
            }
        </ul>
    </div>
  )
}

export default TechStack