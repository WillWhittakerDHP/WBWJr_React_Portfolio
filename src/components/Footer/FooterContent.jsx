import { Container, Row, Button } from 'react-bootstrap';

export default function FooterContent() {
  return (
    <footer className="profile-footer">
      <Container>
        <Row className='bg-primary text-white p4'>
          <Button>
            <img src='' />
            <h1>GitHub</h1>
          </Button>
          <Button>
            <img src='' />
            <h1>LinkedIn</h1>
          </Button>
          <Button>
            <img src='' />
            <h1>Twitter</h1>
          </Button>
        </Row>
      </Container>
    </footer>
  );
}