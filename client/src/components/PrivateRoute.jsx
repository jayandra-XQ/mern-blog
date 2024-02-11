import {useSelector} from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

// we can get the children by using outlet

const PrivateRoute = () => {

    const { curentUser } = useSelector((state) => state.user);
  return  curentUser ? <Outlet /> : <Navigate to='/sign-in' />
  
}

export default PrivateRoute