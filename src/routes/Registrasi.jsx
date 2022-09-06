import React from 'react'
// import { Navigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

function Registrasi(){
    
  const [userName,setUserName] = useState('');
  const [userEmail,setUserEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  // const [navigate,setNavgate] = useState(false);
  // console.log(firstName,lastName,email,password);
  function submit(e){
    e.preventDeafult();


      console.log(userName)



      // await axios.post('http://192.168.1.34:8082/users/regist', payload);
      // setNavgate(true)
    }
    
    
    // if (navigate) {
    //   return <Navigate to="/login"/>
     
    // }
    return (
      <>
    
    <main className='kotak_login'>

     <form onSubmit={submit}>

        <h3 className='tulisan_login'>Registrasi</h3>
        <br/>
        <br/>
        {/* <label>First Name</label>
        <input 
          className='form_login' 
          type={'text'}
          placeholder="username"
          onChange={(e) => setFirstName(e.target.value)}
          /> */}
        <label>User Name</label>
        <input 
          className='form_login'
          type={'text'} 
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          />
        <label>Email</label>
        <input
          className='form_login' 
          type={'text'} 
          placeholder="email address"
          onChange={(e) => setUserEmail(e.target.value)}
          />
       <label>Password</label>
        <input 
          className='form_login'
          type={'password'} 
          placeholder="password"
          onChange={(e) => setPassword1(e.target.value)}
          />
       <label>Ulangi Password</label>
        <input 
          className='form_login'
          type={'password'} 
          placeholder="password"
          onChange={(e) => setPassword2(e.target.value)}
          />
       <button className='tombol_login' type='submit'>Register</button>
     </form>
     
      
    </main>
    </>
  )
}

export default Registrasi