import { Navigate } from "react-router-dom"
import { useUserAuth } from '../../context/UserAuthContext';


const ProtectedRoute = ({children}) => {
  const {user} = useUserAuth()
  return (
    <div>
      { user ?
        children :
        <Navigate to="/" />
      }
    </div>
  )
}
 
export default ProtectedRoute