import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InterestingAdt () {
    return (
        <Container fluid className="borderRed">
            <Container className="borderGreen text-center">
                <h1>Интересные объявления</h1>
                <Row className='row-cols-lg-4 align-items-center'>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>

                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>

                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>

                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                </Row>
            </Container>
        </Container>
    );
}

export default InterestingAdt;