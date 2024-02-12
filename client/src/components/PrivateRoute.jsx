import {useSelector} from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

// we can get the children by using outlet

const PrivateRoute = () => {

    const { currentUser } = useSelector((state) => state.user);
  return  currentUser ? <Outlet /> : <Navigate to='/sign-in' />
  
}

export default PrivateRoute