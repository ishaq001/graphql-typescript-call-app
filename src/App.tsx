import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './authContext/auth'
import { PrivateRoute } from './utils/AuthRoute'
import { Home, Login } from './pages'
import { Container } from 'react-bootstrap'
import { Navbar } from './components'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path='/call' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/archive' element={<Login />} />
            {/* <Route path='*' element={<div>NOt found</div>} /> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
