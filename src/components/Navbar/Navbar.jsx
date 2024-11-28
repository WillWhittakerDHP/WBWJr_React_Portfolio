import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Card from 'react-bootstrap/Card';

export default function  Navlinks({ links }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          {/* <Card>
            <Card.Header> */}
              <Navbar.Brand href="#home">Will Whittaker</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  {/* <Nav className="me-auto">
                  {links.map((link) => link)}
                  </Nav> */}
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                  {links.map((link) => link)}
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            {/* </Card.Header> */}
            {/* <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body> */}
          {/* </Card> */}
        </Container>
      </Navbar>
  );
}
//