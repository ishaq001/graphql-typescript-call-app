import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../authContext/auth'

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(AuthContext)

  console.log('user', user)
  if (!user) {
    console.log('!user')
    return <Navigate to='/login' />
  }

  return <>{children}</>
}
