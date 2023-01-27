import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UidContext } from '../Hook/AppContext';

const NavBar = () => {
  const uid = useContext(UidContext);
  
  return (
    <>
      <Navbar className='w-100' expand="lg">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <Nav>
            {uid
              ?
              <NavLink
                className="ps-4 pe-4 nav-link text-light"
                to="/se_déconnecter"

              >
                Me déconnecter
              </NavLink>
              :
              <NavLink
                className="ps-4 pe-4 nav-link text-light"
                to="/connection"
              >
                Connexion
              </NavLink>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;