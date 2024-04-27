import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = { id: 1, name: "Iphone 15 pro", price: 120000, rating: 5, img: "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg" }
    const description = [
        { id: 1, title: 'Оперативная память', description: '5гб' },
        { id: 2, title: 'Камера', description: '12 мп' },
        { id: 3, title: 'Процессор', description: 'Пентиум 3' },
        { id: 4, title: 'Кол-во ядер', description: '2' },
        { id: 5, title: 'Аккамулятор', description: '4000' },
    ]

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <Col >
                            <h2>{device.name}</h2>
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                            >
                                {device.rating}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey' }}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                //каждый второй через index будет серым
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10 }}> 
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage