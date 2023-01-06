import React from 'react'

function Title({name}) {
  return (
    <div>
        <h2>
            {name.firstname}{name.lastname}
        </h2>
    </div>
  )
}

export default Title