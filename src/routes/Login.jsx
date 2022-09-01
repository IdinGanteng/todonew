import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='kotak_login'>
      <h3 className='tulisan_login'>Silahkan Login Dulu</h3>
      <br/>
      <br/>
       <label>User Name</label>
        <input className='form_login' type={'text'} placeholder="username"/>
       <label>Password</label>
        <input className='form_login' type={'password'} placeholder="password"/>
       <button className='tombol_login' type='submit' onClick={() => navigate("/toedoe")}>Login</button>
       <br/>
       <br/>
       <button className='tombol_login' type='submit' onClick={() => navigate("/registrasi")}>Belum Punya Akun?</button>
    </div>
    </>
  )
}

export default Login;