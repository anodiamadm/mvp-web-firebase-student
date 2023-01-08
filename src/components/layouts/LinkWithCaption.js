import React from 'react'
import { Link } from 'react-router-dom'

const LinkWithCaption = ({linkCaption}) => {
  return (
    <div className='link-with-caption'>
      <span className="s14 fontn c999">{linkCaption.caption} <Link className="link-decor" to={linkCaption.link}>{linkCaption.linkText}</Link></span>
    </div>
  )
}

export default LinkWithCaption