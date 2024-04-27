import React, { useContext } from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'

import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    // const isAuth = false //заглушка для авторизации

    const { user } = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) => //проходимся по массиву роутов, ниже выводим каждый + проверка на авторизацию
                <Route key={path} path={path} element={<Component />} /> //exact(не нужен) указывает что путь точно должен совпадать, key указан тк массив(?)
            )}

            {publicRoutes.map(({ path, Component }) => // для публичных в любом случае выводим маршруты
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>

    )
})

export default AppRouter

//todo доделать Navigate