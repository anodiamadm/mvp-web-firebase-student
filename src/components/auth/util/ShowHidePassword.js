const ShowHidePassword = ({ toggleShowHidePassword }) => {
  return (
    <div className='show-hide-password-position'>
      <label className='s13-5 fontn cursor-pointer show-hide-password'>
      <span id="showPasswordText" onClick={toggleShowHidePassword}><i className="fa-solid fa-eye"></i></span>
      <span id="hidePasswordText" hidden={true} onClick={toggleShowHidePassword}><i className="fas fa-eye-slash"></i></span>
      </label>
    </div>
  );
}
 
export default ShowHidePassword;