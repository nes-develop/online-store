import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import { Card, Col, Row } from 'react-bootstrap'

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Row>
            <Col className='d-flex'>
                {device.brands.map(brand =>
                    <Card
                        style={{ cursor: 'pointer' }}
                        key={brand.id}
                        className='p-3'
                        onClick={() => device.setSelectedBrand(brand)}
                        //условие для выделения
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    >
                        {brand.name}
                    </Card>
                )}
            </Col>
        </Row>
    )
})

export default BrandBar