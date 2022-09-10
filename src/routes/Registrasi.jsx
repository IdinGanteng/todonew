import React from 'react'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import Login from './Login';

function Registrasi() {

  const [userName, setUserName] = useState({});
  const [userEmail, setUserEmail] = useState({});
  const [userPhoneNumber, setUserPhoneNumber] = useState({});
  const [userPassword1, setUserPassword1] = useState({});
  const [userPassword2, setUserPassword2] = useState({});
  const [userFirstName] = useState('');
  const [userLastName] = useState('')
  const [navigate, setNavigate] = useState(false);

  const submit = async event => {
    event.preventDefault();
    
    await axios.post('http://192.168.73.119:8082/users/register', {
      userName, userEmail, userPhoneNumber, userPassword1, userPassword2, userFirstName, userLastName
    }
    );
    setNavigate(true);
  }


  if (navigate) {
    return <Navigate to={'/login'} />

  }
  return (
    <>

      <div className='kotak_login'>

        <form onSubmit={submit}>

          <h3 className='tulisan_login'>Registrasi</h3>
          <br />
          <br />
          <label>User Name</label>
          <input
            className='form_login'
            type={'text'}
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input
            className='form_login'
            type={'text'}
            placeholder="email address"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label>No.Telepon</label>
          <input
            className='form_login'
            type={'text'}
            placeholder="phone number"
            onChange={(e) => setUserPhoneNumber(e.target.value)}
          />
          <label>Password</label>
          <input
            className='form_login'
            type={'password'}
            placeholder="password"
            onChange={(e) => setUserPassword1(e.target.value)}
          />
          <label>Ulangi Password</label>
          <input
            className='form_login'
            type={'password'}
            placeholder="password"
            onChange={(e) => setUserPassword2(e.target.value)}
          />
          <button className='tombol_login' type='submit'>DAFTAR</button>
        </form>


      </div>
    </>
  )
}

export default Registrasi;