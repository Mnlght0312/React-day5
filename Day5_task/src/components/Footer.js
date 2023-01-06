import React from 'react'

function Footer({footer}) {
  return (
    <div>
        <span>Copyright </span>
        {footer.getFullYear()}
    </div>
  )
}

export default Footer