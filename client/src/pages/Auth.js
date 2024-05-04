import React, { useState, useContext } from 'react'
import { Card, Col, Container, Form } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRAION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';


const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation() //через хук useLocation узнаем путь path
    const navigate = useNavigate(); //заменили history
    const isLogin = location.pathname === LOGIN_ROUTE //проверяем маршрут
    //инпуты оживляем
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // console.log(location) проверка

    //после добавления функций апи пишем новую функцию
    const click = async () => {
        try {
            let data;
            //логику проверки входа добавляем сюда
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
                // console.log(response) //была проверка
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message) //в алерте возвращаем что приходит в респонс
        }
    }

    return (
        <Container className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }} > {/* отцентровали и высота весь экран и высота навбара */}
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'
                        value={email} //получаем 
                        onChange={e => setEmail(e.target.value)} //в инпут мы что-то вводим и меняем сразу состояние
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />

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

                            <Button
                                variant={'outline-success'}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
})

// d-flex justify-content-between
export default Auth;