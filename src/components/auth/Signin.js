import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import LinkWithCaption from '../layouts/LinkWithCaption';
import PageHeader from '../layouts/PageHeader';
import PageMessage from '../layouts/PageMessage';
import ShowHidePassword from './util/ShowHidePassword';

function Signin() {
  const [isPending, setIsPending] = useState(false)
  const [errMsg, setErrMsg] = useState([])
  let errArray = []
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const onCredentialsChange = (e) => {
    setCredentials(values => ({ ...values, [e.target.id]: e.target.value }))
  }
  const toggleShowHidePassword = (e) => {
    if (document.getElementById("password").type === "password") {
      document.getElementById("password").type = "text";
      document.getElementById("showPasswordText").hidden = true;
      document.getElementById("hidePasswordText").hidden = false;
    } else {
      document.getElementById("password").type = "password";
      document.getElementById("showPasswordText").hidden = false;
      document.getElementById("hidePasswordText").hidden = true;
    }
  }
  const { login } = useUserAuth()
  const navigate = useNavigate()
  const handleCredentialsSubmit = async (e) => {
    setErrMsg([])
    setIsPending(true)
    e.preventDefault();
    if (credentials.email.length < 7 || credentials.email.length > 40) {
      errArray.push({ field: 'email', msg: { type: 'validation', desc: 'must be 7 to 40 chars.' } })
    } else {
      errArray.filter((item) => item.field !== 'email')
    }
    if (credentials.password.length < 7 || credentials.password.length > 40 || credentials.password.includes(credentials.email)
      || !(/[a-z]/.test(credentials.password)) || !(/[A-Z]/.test(credentials.password))
      || !(/[0-9]/.test(credentials.password)) || !(/[@#$%^&+=]/.test(credentials.password))) {
      errArray.push({ field: 'password', msg: { type: 'validation', desc: 'must be complex, 7 to 40 chars.' } })
    } else {
      errArray.filter((item) => item.field !== 'password')
    }
    if (errArray.length !== 0) {
      setErrMsg(errArray)
    } else {
      try {
        await login(credentials.email, credentials.password)
        await new Promise(res => setTimeout(res, 0));  // PATCH code to ensure user information is grabbed during login()
        navigate('/home')
      } catch (err) {
        if (err.message.includes('wrong-password')) {
          errArray.push({ field: 'password', msg: { type: 'failure', desc: 'Wrong Password!' } })
        } else if (err.message.includes('user-not-found')) {
          errArray.push({ field: 'email', msg: { type: 'failure', desc: 'Email not registered!' } })
        } else {
          errArray.push({ field: 'page', msg: { type: 'failure', desc: err.message } })
        }
      } finally {
        setErrMsg(errArray)
      }
    }
    setIsPending(false)
  }
  return (
    <div className="page-body c777">
      <PageHeader pageTitle={{ bold: 'Login', normal: 'to Anodiam' }} />
      {errMsg.some(msg => msg.field === 'page') && <PageMessage msg={(errMsg.filter((item) => item.field === 'page'))[0].msg} />}
      <form onSubmit={handleCredentialsSubmit} className="anodiam-form">
        <div className="input-field">
          <label htmlFor='email'>Email...&nbsp;&nbsp;<span className='error-in-field s14'>
            {errMsg.some(msg => msg.field === 'email') && (errMsg.filter((item) => item.field === 'email'))[0].msg.desc}
          </span></label>
          <input type="email" id='email' autoComplete="on" required onChange={onCredentialsChange}
            onCut={(e) => e.preventDefault()} onCopy={(e) => e.preventDefault()} onPaste={(e) => e.preventDefault()} />
        </div>
        <div className="input-field">
          <label htmlFor='password'>Password...&nbsp;&nbsp;<span className='error-in-field s14'>
            {errMsg.some(msg => msg.field === 'password') && (errMsg.filter((item) => item.field === 'password'))[0].msg.desc}
          </span></label>
          <input type="password" id='password' autoComplete="on" required onChange={onCredentialsChange}
            onCut={(e) => e.preventDefault()} onCopy={(e) => e.preventDefault()} onPaste={(e) => e.preventDefault()} />
        </div>
        <ShowHidePassword toggleShowHidePassword={toggleShowHidePassword} />
        <div className="input-field">
          {!isPending && <button className="btn theme-btn lighten-1 z-depth-0">Login</button>}
          {isPending && <button className="btn theme-btn lighten-2 z-depth-0 disabled">Loging in...</button>}
        </div>
      </form>
      <LinkWithCaption linkCaption={{ caption: 'Not yet registered?', link: '/signup', linkText: 'Sign up now!' }} />
      <LinkWithCaption linkCaption={{ caption: '', link: '/reset', linkText: 'Forgot / Reset password!' }} />
    </div>
  );
}

export default Signin