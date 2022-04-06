import React, { useReducer, createContext } from 'react'
import jwtDecode from 'jwt-decode'

import { setItem, removeItem, getItem } from '../utils/localStorage'

interface AuthResponseType {
  access_token: String
  user: {
    id: String
    username: String
  }
}

const initialState = {
  user: null,
}

if (getItem('jwtToken')) {
  const decodedToken = jwtDecode(getItem('jwtToken'))

  console.log('decodedToken', decodedToken)
  if (decodedToken.exp * 1000 < Date.now()) {
    console.log('token expired')
    removeItem('jwtToken')
  } else {
    console.log('token not expired')
    initialState.user = decodedToken
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData: AuthResponseType) => {},
  logout: () => {},
  isAuthenticated: false,
})

function authReducer(
  state: any,
  { type, payload }: { type: string; payload?: {} }
) {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        user: payload,
      }

    case 'LOGOUT':
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

function AuthProvider(props: any) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  function login(userData: AuthResponseType) {
    console.log(userData)
    setItem('jwtToken', userData?.access_token)
    dispatch({
      type: 'LOGIN',
      payload: userData,
    })
  }

  function logout() {
    removeItem('jwtToken')
    dispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <AuthContext.Provider
      value={{ user: state?.user, login, logout }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider }
