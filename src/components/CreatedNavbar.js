import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import propTypes from 'prop-types';
import BackgroundColorChanger from './BackgroundColorChanger';
import '../Styles/App.css';

function CreatedNavbar(props) {
  return (
    <>
    <Navbar expand="lg"className="bg-body-tertiary custom-navbar">
    <Container>
    <Navbar.Brand href="/" id="navtitle">{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#about">{props.about}</Nav.Link>
          <BackgroundColorChanger />
        </Nav>

        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button> */}
          <Button className="mx-2" variant="outline-info" onClick={props.toggleDarkMode}>
              {props.mode === "dark" ? "☀️" : "🌙"} Toggle mode
          </Button>
        {/* </Form> */}

      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default CreatedNavbar

CreatedNavbar.propTypes = {
title : propTypes.string , 
about : propTypes.string
}

CreatedNavbar.defaultProps =  {
title : "Welcome to my new site",
about : "Know about us here"
}