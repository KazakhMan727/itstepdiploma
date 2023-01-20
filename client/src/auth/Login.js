import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Login () {
    let [email, setEmail] = useState();
    let [pass, setPass] = useState();

    function sendLog (e) {
        axios.post('http://localhost:8080/users/login', new FormData(e.target))
            .then((response) => {
              console.log(response.response.status);
              localStorage.setItem("user", JSON.stringify({email: email, password: pass}));
            }, (error) => {
              console.log(error);
            });

    }

    return (
        <Container fluid className='d-flex align-items-center justify-content-center'>
            <Card className='m-5' style={{maxWidth: '600px'}}>
                <Card.Body className='px-5 d-flex flex-column'>
                    <h2 className='text-uppercase text-center mb-5'>Войти</h2>

                    <Form onSubmit={sendLog}>

                        <Form.Group className='mb-3' controlId='email'>
                            <Form.Label>Почта</Form.Label>
                            <Form.Control type='email' name='email' onChange={e => setEmail(e.target.value)} placeholder='example@mail.com' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='password'>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type='password' name='password' onChange={e => setPass(e.target.value)} placeholder='Введите пароль еще раз' />
                        </Form.Group>

                        <Button className='w-100' variant='success' type='submit'>Войти</Button>
                    </Form>

                </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;