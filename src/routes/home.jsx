import React from 'react'
import Logo from '../components/idin.png'
import '../routes/App.css';

const Home = () => {
  return (
    <div>
    <div className='home-logo'>
        <img src={Logo} alt="logo"/>
        <div className="text-home">
        <h1>HISASHIBURIDANAAAA</h1>
        <h3 className='a'>Selamat datang di TODO LIST kami, kami harap anda punya rencana untuk bunuh diri hari ini</h3>
        <br/>
        <a href='/login'><h3 className='b'>GET STARTED</h3></a>
        </div>
    </div>
    </div>
    
  )
}

export default Home