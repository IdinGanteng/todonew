import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registrasi = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='kotak_login'>
        <h3 className='tulisan_login'>Registrasi</h3>
        <br/>
        <br/>
        <label>First Name</label>
        <input className='form_login' type={'text'} placeholder="username"/>
        <label>Last Name</label>
        <input className='form_login' type={'text'} placeholder="username"/>
        <label>Email</label>
        <input className='form_login' type={'text'} placeholder="email address"/>
       <label>Password</label>
        <input className='form_login' type={'password'} placeholder="password"/>
       <button className='tombol_login' type='submit' onClick={() => navigate("/toedoe")}>Register</button>
    </div>
    </>
  )
}

export default Registrasi