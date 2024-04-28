import React,{useState} from 'react'
import '../login.css'


const Login = () => {

   const [cred,setCred ]= useState({
      userName : "",
      email:"",
      password:""

   })

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
  };

  return (
    <div className='main'>
    <div className="login-form">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        <span>Username</span>
      <input
        className='input-text'
        id="username"
        name="username"
        value={cred.userName}
        onChange={(e) => setCred({...cred,userName:e.target.value}) }
        required
      />
      </label>

       <label htmlFor="email">
        <span>Email</span>
      <input
        className='input-text'
        id="email"
        name="email"
        value={cred.email}
        onChange={(e) => setCred({...cred,email:e.target.value}) }
        required
      />
      </label>

      <label htmlFor="password">
        <span>Password</span>
      <input
        className='input-text'
        id="password"
        name="password"
        value={cred.password}
        onChange={(e) => setCred({...cred,password:e.target.value})}
        required
      />
      </label>
     
      <button className='login-btn'>Login</button>
    </form>
    <p><a href="#">Forget Password?</a></p>
    <p>Not a Member? <a href="/Signup">Signup</a></p>
  </div>
  </div>
);
}
export default Login