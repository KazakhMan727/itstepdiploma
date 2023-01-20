import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
    return (
        <Container fluid className='bg-dark borderRed' style={{height: '150px'}}>
            <Container className='borderGreen'></Container>
        </Container>
    );
}

export default Footer;