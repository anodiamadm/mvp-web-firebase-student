import React, { useState } from 'react'
import LinkWithCaption from '../layouts/LinkWithCaption';
import PageHeader from '../layouts/PageHeader';
import PageMessage from '../layouts/PageMessage';
import ShowHidePassword from './util/ShowHidePassword';

function Signin() {
  const [errMsg, setErrMsg] = useState([])
  let errArray = []
  const [credentials, setCredentials] = useState({email: '', password: ''})
  const onCredentialsChange=(e)=>{
    setCredentials(values=> ({...values, [e.target.id]: e.target.value }))
  }
  const toggleShowHidePassword = (e) => {
    if(document.getElementById("password").type==="password") {
      document.getElementById("password").type="text";
      document.getElementById("showPasswordText").hidden=true;
      document.getElementById("hidePasswordText").hidden=false;
    } else {
      document.getElementById("password").type="password";
      document.getElementById("showPasswordText").hidden=false;
      document.getElementById("hidePasswordText").hidden=true;
    }
  }
  const handleCredentialsSubmit=(e)=>{
    e.preventDefault();
    if(credentials.email.length<7 || credentials.email.length>40) {
      errArray.push({field: 'email', msg: {type: 'validation', desc: 'must be 7 to 40 chars.'}})
    } else {
      errArray.filter((item) => item.field !== 'email')
    }
    if(credentials.password.length<7 || credentials.password.length>40 || credentials.password.includes(credentials.email)
      || !(/[a-z]/.test(credentials.password)) || !(/[A-Z]/.test(credentials.password))
      || !(/[0-9]/.test(credentials.password)) || !(/[@#$%^&+=]/.test(credentials.password))) {
      errArray.push({field: 'password', msg: {type: 'validation', desc: 'must be complex, 7 to 40 chars.'}})
    } else {
      errArray.filter((item) => item.field !== 'password')
    }
    if (errArray.length===0) {
      /********************************/
      console.log('Login with valid credentials: ', credentials);
      /********************************/
      setErrMsg([])
    } else {
      setErrMsg(errArray)
    }
  }  
  return (
    <div className="page-body c777">
      <PageHeader pageTitle={{bold: 'Login', normal: 'to Anodiam'}}/>
      { errMsg.some(msg=>msg.field==='page') && <PageMessage msg={(errMsg.filter((item)=>item.field==='page'))[0].msg}/> }
      <form onSubmit={handleCredentialsSubmit} className="anodiam-form">
        <div className="input-field">
          <label htmlFor='email'>Email...&nbsp;&nbsp;<span className='error-in-field s14'>
            { errMsg.some(msg=>msg.field==='email') && (errMsg.filter((item)=>item.field==='email'))[0].msg.desc }
          </span></label>
          <input type="email" id='email' autoComplete="on" required onChange={onCredentialsChange}
          onCut={(e)=>e.preventDefault()} onCopy={(e)=>e.preventDefault()} onPaste={(e)=>e.preventDefault()} />
        </div>
        <div className="input-field">
          <label htmlFor='password'>Password...&nbsp;&nbsp;<span className='error-in-field s14'>
            { errMsg.some(msg=>msg.field==='password') && (errMsg.filter((item)=>item.field==='password'))[0].msg.desc }
          </span></label>
          <input type="password" id='password' autoComplete="on" required onChange={onCredentialsChange}
          onCut={(e)=>e.preventDefault()} onCopy={(e)=>e.preventDefault()} onPaste={(e)=>e.preventDefault()} />
        </div>
        <ShowHidePassword toggleShowHidePassword={toggleShowHidePassword} />
        <div className="input-field">
          <button className="btn theme-btn lighten-1 z-depth-0">Login</button>
        </div>
      </form>
      <LinkWithCaption linkCaption={{caption: 'Not yet registered?', link: '/signup', linkText: 'Sign up now!'}}/>
      <LinkWithCaption linkCaption={{caption: '', link: '/resetpassword', linkText: 'Forgot / Reset password!'}}/>
    </div>
  );
}

export default Signin