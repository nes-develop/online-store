import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import ListGroup from 'react-bootstrap/ListGroup';
import DeviceStore from '../store/DeviceStore';


const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type => //проходимся по типам изначально по статике, которая в DeviceStore, обязательно указываем key={type.id} и выводим {type.name}
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    //условие для выделения
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar
