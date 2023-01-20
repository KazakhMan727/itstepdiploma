import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Registration () {

    let [password, setPassword] = useState();
    let [repeated, setRepeated] = useState();
    let [incorrectPassword, setIncorrect] = useState('');

    function sendReg (e) {
        console.log(password);
        console.log(repeated);

        if (password == null || repeated == null) {
            setIncorrect("Одно из полей пусто");
        }

        else {
            if (password != repeated) {
                setIncorrect("Пароли отличаются");
            }
    
            else {
                axios.post('http://localhost:8080/users/register', new FormData(e.target))
                    .then((response) => {
                      console.log(response);
                    }, (error) => {
                      console.log(error);
                    });
            }
        }
        
    }

    return (
        <Container fluid className='d-flex align-items-center justify-content-center'>
            <Card className='m-5' style={{maxWidth: '600px'}}>
                <Card.Body className='px-5 d-flex flex-column'>
                    <h2 className='text-uppercase text-center mb-5'>Регистрация</h2>

                    <Form onSubmit={sendReg}>
                        <Form.Group className='mb-3' controlId='name'>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type='text' name='name' placeholder='Введите имя' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='email'>
                            <Form.Label>Почта</Form.Label>
                            <Form.Control type='email' name='email' placeholder='example@mail.com' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='password'>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control onChange={e => setPassword(e.target.value)} type='password' name='password' placeholder='Введите пароль еще раз' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='repeatedPassword'>
                            <Form.Label>Повторите пароль</Form.Label>
                            <Form.Control onChange={e => setRepeated(e.target.value)} type='password' name='repeatedPassword' placeholder='Введите пароль' />
                        </Form.Group>
                        <h5>{incorrectPassword}</h5>

                        <Button className='w-100' variant='success' type='submit'>Зарегистрироваться</Button>

                        <p>Уже есть аккаунт? <Link to="/log">Войти</Link></p>

                    </Form>

                    {/* <form onSubmit={sendUser}>
                        <input name='name' className='mb-4' placeholder='Ваше имя' />
                        <input name='email' className='mb-4' placeholder='Электронный адрес' />
                        <input name='password' className='mb-4' type="password" placeholder='Пароль' />
                        <input className='mb-4' type="password" placeholder='Повторите пароль' />
                        <Button variant='success' type='submit'>Зарегистрироваться</Button>
                    </form> */}

                        {/* <Form.Group className='mb-3' controlId='name'>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type='text' name='name' placeholder='Введите имя' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='email'>
                            <Form.Label>Почта</Form.Label>
                            <Form.Control type='email' name='email' placeholder='example@mail.com' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='password'>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type='password' name='password' placeholder='Введите пароль' />
                        </Form.Group>

                        <Button variant='success' type='submit'>Зарегистрироваться</Button> */}
                        
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Registration;