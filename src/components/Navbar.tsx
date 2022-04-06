import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
export const Nav: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Navbar expand='lg' variant='light' bg='light'>
          <Container>
            <Navbar.Brand href='#'>Turing Tech</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </React.Fragment>
  )
}
