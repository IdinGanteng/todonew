import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><a href='/login'>login</a></li>
                <li><a href='/registrasi'>Registrasi</a></li>
                <li><a href='/'>home</a></li>
                <div className="dropdown">
                <button className="dropbtn">Golek Liyone
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="/biodata_penulis">about</a>
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