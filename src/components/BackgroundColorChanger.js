import React, { useState } from 'react';
import { Navbar, Container, Dropdown } from 'react-bootstrap';

const BackgroundColorChanger = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="color-dropdown">
            Background
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleColorChange({target: {value: 'lightgrey'}})}>Grey</Dropdown.Item>
            <Dropdown.Item onClick={() => handleColorChange({target: {value: 'lightblue'}})}>Blue</Dropdown.Item>
            <Dropdown.Item onClick={() => handleColorChange({target: {value: 'lightgreen'}})}>Green</Dropdown.Item>
            <Dropdown.Item onClick={() => handleColorChange({target: {value: 'orange'}})}>Orange</Dropdown.Item>
            <Dropdown.Item onClick={() => handleColorChange({target: {value: 'yellow'}})}>Yellow</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default BackgroundColorChanger;
