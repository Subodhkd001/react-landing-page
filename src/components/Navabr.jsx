import React from 'react'

function Navabr() {
  return (
    <div>
      <nav className='container'>
        <div className="logo ">
          <img src="../public/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className='btn'>Login</button>
      </nav>

    </div>

  )
}

export default Navabr
