import React from 'react'

const PasswordStrengthMeter = ({ credentials }) => {

  let passwordStrength = 0;

  const calculatePasswordStrength = () => {
    if(credentials.password.length>0){
      // 1. NOT less than 8 characters or more than 20 characters
      if (credentials.password.length>=8 && credentials.password.length<=128) {
        ++passwordStrength;
      }
      // 2. Does NOT contain the username / email string
      if (!credentials.password.includes(credentials.email.substring(0,credentials.email.indexOf("@")))) {
        ++passwordStrength;
      }
      // 3. contain at least one small alphabet (a-z), one CAPS alphabet (A-Z) and one numeral (0-9)
      if (/[a-z]/.test(credentials.password) && /[A-Z]/.test(credentials.password) && /[0-9]/.test(credentials.password)) {
        ++passwordStrength;
      }
      // 4. contain at least one of (@,#,$,%,^,&,+,=)
      if (/[@#$%^&+=]/.test(credentials.password)) {
        ++passwordStrength;
      }
    }
    return passwordStrength;
  }

  const progressColor = (passwordStrength) => {
      switch(passwordStrength){
      case 1:
        return '#ff1f00';
      case 2:
        return '#ff5f00';
      case 3:
        return '#ffaf00';
      case 4:
        return '#00ff1f';
      default:
        return 'none';
    }
  }

  const changePasswordColor = (password) => ({
    width: `${calculatePasswordStrength(password) * 25}%`,
    background: progressColor(passwordStrength),
    height: '4px'
  });

  return (
    <div className="progress progress-bar-top" style={{ height: '4px', margin: '0 0 5px', backgroundColor: '#eee'}}>
      <div className="progress-bar" style={changePasswordColor(credentials.password)}></div>
    </div>
  )
}

export default PasswordStrengthMeter
