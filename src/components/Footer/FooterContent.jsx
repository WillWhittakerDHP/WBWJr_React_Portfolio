import { Container, Col, Row, Button } from 'react-bootstrap';
import './footer.css';
import gitHubIcon from  '../../assets/gitHubIcon.jpg';
import linkedInIcon from  '../../assets/linkedInIcon.png';
import DHPIcon from  '../../assets/DHPIcon.jpg';

export default function FooterContent() {
  return (
    <footer className="profile-footer">
      <Container>
        <Row className='bg-primary text-white p-4 justify-content-center'>
          <Col xs='auto'>
            <Button variant='light' className='footer-button'>
              <p>GitHub</p>
              <img src={gitHubIcon} className='footer-icon'/>
            </Button>
          </Col>
          <Col xs='auto'>
            <Button variant='light' className='footer-button'>
              <p>LinkedIn</p>
              <img src={linkedInIcon} className='footer-icon'/>
            </Button>
          </Col>
          <Col xs='auto'>
            <Button variant='light' className='footer-button'>
            <img src={DHPIcon} className='footer-icon'/>
              <img src='' />
              <p>DHP</p>
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}