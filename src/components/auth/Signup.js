import React, { useState } from 'react'
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import LinkWithCaption from '../layouts/LinkWithCaption';
import PageHeader from '../layouts/PageHeader';
import PageMessage from '../layouts/PageMessage';
import PasswordConfirmMeter from './util/PasswordConfirmMeter ';
import PasswordStrengthMeter from './util/PasswordStrengthMeter';
import ShowHidePassword from './util/ShowHidePassword';

function Signup() {
  const [isPending, setIsPending] = useState(false)
  const [errMsg, setErrMsg] = useState([])
  let errArray = []
  const [credentials, setCredentials] = useState({email: '', password: '', confirmPassword: ''})
  const onCredentialsChange=(e)=>{
    setCredentials(values=> ({...values, [e.target.id]: e.target.value }))
  }
  const toggleShowHidePassword = (e) => {
    if(document.getElementById("password").type==="password") {
      document.getElementById("password").type="text";
      document.getElementById("confirmPassword").type="text";
      document.getElementById("showPasswordText").hidden=true;
      document.getElementById("hidePasswordText").hidden=false;
    } else {
      document.getElementById("password").type="password";
      document.getElementById("confirmPassword").type="password";
      document.getElementById("showPasswordText").hidden=false;
      document.getElementById("hidePasswordText").hidden=true;
    }
  }
  const { signUp } = useUserAuth()
  const navigate = useNavigate()
  const handleCredentialsSubmit= async (e)=>{
    setErrMsg([])
    setIsPending(true)
    e.preventDefault();
    if(credentials.email.length<7 || credentials.email.length>40) {
      errArray.push({field: 'email', msg: {type: 'validation', desc: 'must be 7 to 40 chars.'}})
    } else {
      errArray.filter((item) => item.field !== 'email')
    }
    if(credentials.password.length<7 || credentials.password.length>40 
      || credentials.password.includes(credentials.email.substring(0,credentials.email.indexOf("@")))
      || !(/[a-z]/.test(credentials.password)) || !(/[A-Z]/.test(credentials.password))
      || !(/[0-9]/.test(credentials.password)) || !(/[@#$%^&+=]/.test(credentials.password))) {
      errArray.push({field: 'password', msg: {type: 'validation', desc: 'must be 7 to 40 characters long; containing small, CAPS, numbers and special characters'}})
    } else {
      errArray.filter((item) => item.field !== 'password')
    }
    if(credentials.password!==credentials.confirmPassword) {
      errArray.push({field: 'confirmPassword', msg: {type: 'validation', desc: 'must match.'}})
    } else {
      errArray.filter((item) => item.field !== 'confirmPassword')
    }
    if (errArray.length!==0) {
      setErrMsg(errArray)
    } else {
      try {
        const cred = await signUp(credentials.email, credentials.password)
        if(cred.user!==null) {
          await new Promise(res => setTimeout(res, 0));  // PATCH code
          navigate('/profile')
        } else {
          errArray.push({field: 'page', msg: {type: 'failure', desc:`Signup error for ${credentials.email}!`}})
        }
      } catch(err) {
        if(err.message.includes('email-already-in-use')) {
          errArray.push({field: 'email', msg: {type: 'failure', desc: `${credentials.email} is already registered!`}})
        } else {
          errArray.push({field: 'page', msg: {type: 'failure', desc: err.message.replace('Firebase: ', "Check your connection! ")}})
        }
      } finally {
        setErrMsg(errArray)
      }
    }
    setIsPending(false)
  }
  return (
    <div className="page-body c777">
      <PageHeader pageTitle={{bold: 'Sign up', normal: 'with Anodiam'}}/>
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
          <input type="password" id='password' autoComplete="off" required onChange={onCredentialsChange}
          onCut={(e)=>e.preventDefault()} onCopy={(e)=>e.preventDefault()} onPaste={(e)=>e.preventDefault()} />
          <PasswordStrengthMeter credentials={credentials} />
        </div>
        <ShowHidePassword toggleShowHidePassword={toggleShowHidePassword} />
        <div className="input-field">
          <label htmlFor='confirmPassword'>Confirm Password...&nbsp;&nbsp;<span className='error-in-field s14'>
            { errMsg.some(msg=>msg.field==='confirmPassword') && (errMsg.filter((item)=>item.field==='confirmPassword'))[0].msg.desc }
          </span></label>
          <input type="password" id='confirmPassword' autoComplete="off" required onChange={onCredentialsChange}
          onCut={(e)=>e.preventDefault()} onCopy={(e)=>e.preventDefault()} onPaste={(e)=>e.preventDefault()} />
          <PasswordConfirmMeter credentials={credentials} />
        </div>
        <div className="input-field">
          { !isPending && <button className="btn theme-btn lighten-1 z-depth-0">Sign Up</button>}
          { isPending && <button className="btn theme-btn lighten-2 z-depth-0 disabled">Signing up...</button>}
        </div>
      </form>
      <LinkWithCaption linkCaption={{caption: 'Already an user?', link: '/', linkText: 'Login here'}}/>
      <LinkWithCaption linkCaption={{caption: '', link: '/reset', linkText: 'Forgot / Reset password!'}}/>
    </div>
  );
}

export default Signup