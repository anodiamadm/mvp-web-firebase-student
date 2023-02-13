import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-box rel page-boundary">
      <NavLink to="/">
        <div className="row-display">
          <img src={ process.env.PUBLIC_URL + '/resources/anodiamLogo.png' } alt='A' className="bl" />
          <div className="bottom-align">
            <span className="logo-name silent-link">nodiam</span>
          </div>
          <div className="ico icon-home"></div>
        </div>
        <div className="catchline silent-link">Education that enlightens!</div>
      </NavLink>
    </div>
  );
}
 
export default Logo;