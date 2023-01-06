import React from 'react'
const PasswordConfirmMeter = ({ credentials }) => {
  const progressColor = ({ credentials }) => {
    if (credentials.confirmPassword==='') {
      return 'none'
    } else if(credentials.password!==credentials.confirmPassword) {
      return '#ff1f00';
    } else {
      return '#00ff1f'
    }
  }
  const changePasswordColor = ({ credentials }) => ({
    background: progressColor({ credentials }),
    height: '4px'
  });
  return (
    <div className="progress progress-bar-top" style={{ height: '4px', margin: '0 0 5px', backgroundColor: '#eee'}}>
      <div className="progress-bar" style={changePasswordColor({ credentials })}></div>
    </div>
  )
}

export default PasswordConfirmMeter
