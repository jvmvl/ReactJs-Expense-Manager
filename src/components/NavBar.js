import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const NavBar = () => {
    const { title, menu } = React.useContext(AppContext);

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Nav className="me-auto">
          {menu.map((m) => (
                <Nav.Link href={m.link}>{m.name}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;