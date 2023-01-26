import React, { useState } from 'react'
import { useUserAuth } from '../../context/UserAuthContext';
import LinkWithCaption from '../layouts/LinkWithCaption';
import PageHeader from '../layouts/PageHeader';
import PageMessage from '../layouts/PageMessage';

function EmailLinkLogin() {
  const [isPending, setIsPending] = useState(false)
  const [errMsg, setErrMsg] = useState([])
  let errArray = []
  const [credentials, setCredentials] = useState({email: ''})
  const onCredentialsChange=(e)=>{
    setCredentials(values=> ({...values, [e.target.id]: e.target.value }))
  }
  const { passwordlessLogin, isPasswordlessSignIn, passwordlessSignIn } = useUserAuth()
  const handleCredentialsSubmit= async (e)=>{
    setErrMsg([])
    setIsPending(true)
    e.preventDefault();
    if(credentials.email.length<7 || credentials.email.length>40) {
      errArray.push({field: 'email', msg: {type: 'validation', desc: 'must be 7 to 40 chars.'}})
    } else {
      errArray.filter((item) => item.field !== 'email')
    }
    if (errArray.length!==0) {
      setErrMsg(errArray)
    } else {
      try {
        const respoSendEmail = await passwordlessLogin(credentials.email)
        if (respoSendEmail!== null) {
          window.localStorage.setItem('emailForSignIn', credentials.email)
          errArray.push({field: 'page', msg: {type: 'success', desc: `Login link sent to ${credentials.email}!`}})
        }
        const respoGetEmail = await isPasswordlessSignIn(window.location.href)
        if (respoGetEmail!== null) {
          let mail = window.localStorage.getItem('emailForSignIn');
          if (!mail) {
            mail = window.prompt('Please provide your email for confirmation');
          }
          const respoSignIn = await passwordlessSignIn(mail, window.location.href)
          if (respoSignIn!== null) {
            window.localStorage.removeItem('emailForSignIn');
          }
        }
      } catch(err) {
        if(err.message.includes('user-not-found')) {
          errArray.push({field: 'email', msg: {type: 'failure', desc: `${credentials.email} is not yet registered!`}})
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
      <PageHeader pageTitle={{bold: 'Passwordless', normal: 'login'}}/>
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
          { !isPending && <button className="btn theme-btn lighten-1 z-depth-0">Send Email</button>}
          { isPending && <button className="btn theme-btn lighten-2 z-depth-0 disabled">Sending Email...</button>}
        </div>
      </form>
      <LinkWithCaption linkCaption={{ caption: 'Not yet registered?', link: '/signup', linkText: 'Sign up now!' }} />
    </div>
  );
}

export default EmailLinkLogin