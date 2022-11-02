import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">

      <Navbar className="nav-color" expand="lg">
        <Container className fluid>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav variant="pills" className=" navStyle justify-content-end">
              <Nav.Link as={Link} to="/">Акции</Nav.Link>
              <NavDropdown title="Направления" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">Все направления</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Взрослое отделение</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Детское отделение</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">Лаборатория</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link as={Link} to="/">Направления</Nav.Link> */}
              <Nav.Link as={Link} to="/">Врачи</Nav.Link>
              <NavDropdown title="Пациентам" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">Информация</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Карта пациента</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Помощь</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/Dogovor">Договор онлайн</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/">Контакты</Nav.Link>
              <Nav.Link>+7(3812)211226</Nav.Link>
              <Nav.Link as={Link} to="/">ENG</Nav.Link>
              <Button variant="danger">Записаться</Button>
              {/* <Nav.Link as={Link} to="/content2">Link</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link}  to="/">Action</NavDropdown.Item>
                  <NavDropdown.Item as={Link}  to="/content2">Another action</NavDropdown.Item>
                  <NavDropdown.Item as={Link}  to="/">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link}  to="/">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
}

export default Header;
