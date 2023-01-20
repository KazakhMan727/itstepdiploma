import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap'

function Header () {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Project
                </Navbar.Brand>
                <Nav className=''>
                    <LinkContainer to="/adts">
                        <Nav.Link>Объявления</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/reg">
                        <Nav.Link>Ваш профиль</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/submit">
                        <Button variant='outline-primary'>Подать объявление</Button>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;