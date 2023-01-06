import React from 'react'

function Date({subBody}) {
    console.log(subBody);
  return (
    <div>
        <p>{`${subBody.getFullYear()} / ${subBody.getMonth() +1} / ${subBody.getDay() + 1}`}</p>
    </div>
  )
}

export default Date;