import { useMutation } from '@apollo/client'
import React from 'react'
import { useState, useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { AuthContext } from '../authContext/auth'
import { useForm } from '../customHooks/useForm'
import { LOGIN_USER } from '../graphqlOperations/loginUser'

import { useNavigate } from 'react-router-dom'

export function Login(): React.FunctionComponentElement<{}> {
  const { login: contextLogin } = useContext(AuthContext)
  const [error, setErrors] = useState('')
  const navigate = useNavigate()
  const initialState = { username: '', password: '' }

  const { onChange, onSubmit, values } = useForm(logUser, initialState)

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    variables: {
      input: values,
    },
    onCompleted({ login }: typeof loginUser) {
      console.log('login', login)
      if (login) {
        contextLogin(login)
        navigate('/')
      }
    },
  })

  function logUser() {
    loginUser()
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Login</h1>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your username'
            name='username'
            onChange={onChange}
            value={values.username}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            onChange={onChange}
            value={values.password}
          />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={loading}>
          Login
        </Button>
      </Form>
      {error && <Alert security='error'>{error}</Alert>}
    </Container>
  )
}
