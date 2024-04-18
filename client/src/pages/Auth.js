import React from 'react'
import { Card, Col, Container, Form } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRAION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation() //через хук useLocation узнаем путь path
    const isLogin = location.pathname === LOGIN_ROUTE //проверяем маршрут
    console.log(location)
    return (
        <Container className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }} > {/* отцентровали и высота весь экран и высота навбара */}
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-3' placeholder='Введите ваш email...' />
                    <Form.Control className='mt-3' placeholder='Введите ваш пароль...' />

                    <Row>
                        <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={REGISTRAION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                            }

                            <Button variant={'outline-success'}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

// d-flex justify-content-between
export default Auth;