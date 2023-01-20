import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Categories () {
    return (
        <Container fluid className='borderRed'>
            <Container className='borderGreen text-center'>
                <h1>Категории</h1>
                <Row>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                    <Col lg={3} className='borderBlue block'></Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Categories;