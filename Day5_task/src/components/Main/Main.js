import React from 'react';
import Date from './Date';

function Main({body, tody}) {
  return (
    <div className='Main'>
        <p>{body.firstname} {body.lastname}</p>
        <Date subBody={tody}/>

    </div>
  )
}

export default Main