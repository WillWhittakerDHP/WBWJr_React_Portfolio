import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function  Navlinks({ links }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Will Whittaker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                {links.map((link) => link)}
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
//