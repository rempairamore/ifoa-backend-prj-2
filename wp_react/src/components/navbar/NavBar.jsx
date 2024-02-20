import React, { useState } from 'react';
import { Container, Nav, Navbar, Form, Button, NavDropdown, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search-result/${searchTerm}`)

  }

  return (
    <>
   <Navbar bg="dark" data-bs-theme="dark" expand="lg">

      <Container fluid>
        <NavLink onClick={()=> navigate("/")}><Navbar.Brand >WP St4tic</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=> navigate("/")}>Home</Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex" onSubmit={(e) => handleSearch(e)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" onClick={(e) => handleSearch(e)}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  )
}
