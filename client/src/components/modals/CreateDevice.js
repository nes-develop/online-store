import React, { useContext, useState } from 'react'
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../index'

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([]) //состояние характеристик
    //функция для добавления хар-к устройства
    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]) //поле number получаем из сегодняшней даты todo
    }
    //функция удаления хар-к устройства
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number)) // проверка todo
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className='mt-3' placeholder='Введите название устройства' />
                    <Form.Control className='mt-3' placeholder='Введите стоимость устройства' type='number' />
                    <Form.Control className='mt-3' type='file' />
                    <hr />
                    <Button variant="outline-dark" onClick={addInfo}>Добавить новое устройство</Button>

                    {info.map(i =>
                        <Row className='mt-4' key={i.number}>

                            <Col md={4}>
                                <Form.Control placeholder='Введите название устройства' />
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder='Введите описание устройства' />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.number)} variant='outline-danger'>Удалить</Button>
                            </Col>

                        </Row>

                    )}


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice