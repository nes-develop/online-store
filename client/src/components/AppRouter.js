import React from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'

import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = false //заглушка для авторизации
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) => //проходимся по массиву роутов, ниже выводим каждый + проверка на авторизацию
                <Route key={path} path={path} element={<Component />} /> //exact(не нужен) указывает что путь точно должен совпадать, key указан тк массив(?)
            )}

            {publicRoutes.map(({ path, Component }) => // для публичных в любом случае выводим маршруты
                <Route key={path} path={path} element={<Component /> }  />
            )}
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        
    )
}

export default AppRouter

//todo доделать Navigate