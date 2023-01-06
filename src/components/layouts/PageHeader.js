import React from 'react'

const PageHeader = ({pageTitle}) => {
  return (
    <div className='page-header'>
      <h2 className="s24 fontb">{pageTitle.bold} <span className="fontn">{pageTitle.normal}</span></h2>
    </div>
  )
}

export default PageHeader
