import React, {useState} from 'react';

import logo from '../components/idin.png';






const Login =()=>{

 const [payload, setPayload] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPayload(values =>({...values, [name]: value}))

  }
  
  const handleSubmit = (event) =>{
  event.preventDefault()
  console.log(payload)
  
  }
  
  
  // if (navigate) {
  //   return <Navigate path="/login"/>
   

  return (
    <>
   

    <div className='kotak_login'>
      <div className='logo'>
      <img src={logo} alt="logo"/>
      </div>
      <h3 className='tulisan_login'>Silahkan Login Dulu</h3>
      <br/>
      <br/>
      <form  onSubmit={handleSubmit}>

         
       <label>User Name
        <input className='form_login'
               type='text'
               placeholder="user name"
               name='userName'
               value={payload.userName || ''}
               onChange={handleChange}
        />

       </label>
       <label>Password

        <input className='form_login'
               type={'password'}
               placeholder="password"
               name='userPassword'
               value={payload.userPassword || ''} 
               onChange={handleChange}
        />
       </label>
       <input className='tombol_login' type='submit'/>
       <br/>
       <br/>
       {/* <button className='tombol_login' type='submit' onClick={() => navigate("/registrasi")}>Belum Punya Akun?</button> */}
      </form>
    </div>
    
    </>
  )
}

export default Login;