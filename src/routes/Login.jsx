import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import logo from '../components/idin.png';
import axios from 'axios';





const Login =()=>{
  const [userName,setUserName] = useState({});
  const [userPassword,setUserPassword] = useState({});
  
  const [navigate,setNavigate] = useState(false);
 
  const submit= async event =>{
    event.preventDefault();

    
    
    const data = await axios.post('http://192.168.1.3:8082/users/login', {
      userName,userPassword
    }
    );
    // console.log(data);

    axios.defaults.headers.common['Authorization']=`Bearer ${data['accesToken']}`
      setNavigate(true);
    }
    
    
    if (navigate) {
      return <Navigate to="/toedoe"/>
    }
    
  return (
    <>
   

    <div className='kotak_login'>
      <div className='logo'>
      <img src={logo} alt="logo"/>
      </div>
      <h3 className='tulisan_login'>Silahkan Login Dulu</h3>
      <br/>
      <br/>
      <form  onSubmit={submit}>

         
       <label>User Name
        <input className='form_login'
               type='text'
               placeholder="user name"
               onChange={(e) => setUserName(e.target.value)}
        />

       </label>
       <label>Password

        <input className='form_login'
               type='password'
               placeholder="password"
               onChange={(e) => setUserPassword(e.target.value)}
        />
       </label>
       <button className='tombol_login' type='submit'>DAFTAR</button>
       <br/>
       <br/>
       <a href='/registrasi'>Belom punya akun?</a>
      </form>
    </div>
    
    </>
  )
}

export default Login;