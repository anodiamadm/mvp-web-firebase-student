import React from 'react'

const PageMessage = ({msg}) => {
  return (
    <div className='page-message'>
      {
        msg.type==='success' ? 
          <h2 className="s15 fontb cmsg-green">{msg.desc}</h2> : 
          msg.type==='verify' ?
            <h2 className="s15 fontb ctheme">{msg.desc}</h2> :
            <h2 className="s15 fontb cmsg-red">{msg.desc}</h2>
      }
    </div>
  )
}

export default PageMessage