import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><a href='/login'>login</a></li>
                <li><a href='/registrasi'>Registrasi</a></li>
                <li><a href='/'>home</a></li>
                <div class="dropdown">
                <button class="dropbtn">Golek Liyone
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="/">about</a>
                    <a href="/">contact</a>
                    <a href="/login">log out</a>
                </div>
            </div> 
            </ul>
        </nav>

    
    </div>
  )
}

export default Navbar