import React,{useRef} from 'react'
import "./login.css";
export const Login = () => {
  const refUsuario =useRef(null);
  const refPassword =useRef(null);
  const handleLogin =(e)=>{
    e.preventDefault();
    const data= {
      "usuario" : refUsuario.current.value,
      "clave" :refPassword.current.value
    }
console.log(data)
  }

  return (
    <div className="container">

  <div className="row">
   

   
    <div className="col-sm-4 offset-4 mt-5" style={{}}>
    <div className="logo" />
    <div className="title">Login</div>
    <form>
      <div className="credentials">
        <div className="username">
          <span className="glyphicon glyphicon-user" />
          <input type="email" name="email" placeholder="email" 
          ref={refUsuario}
          required />
        </div>
        <div className="password">
          <span className="glyphicon glyphicon-lock" />
          <input type="password" name="password" placeholder="Password" ref={refPassword} />
        </div>
        <button className="submit" onClick={handleLogin}>Submit</button>
      </div>
    </form>
    <div className="link">
      <a href="#">Forget Password? </a> &nbsp; <a href="#"> Sign up </a>
    </div>
  
  </div>
  </div>
  </div>
    
  )
}
