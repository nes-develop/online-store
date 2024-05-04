import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/userAPI';
import Spinner from 'react-bootstrap/Spinner';

const App = observer(() => {
  const { user } = useContext(Context)//проверка пользователя +
  const [loading, setLoading] = useState(true) //крутилка загрузки

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, []) //если массив зависимостей пуст, то выполнится единожды

  if (loading) {
    return <Spinner animation={'grow'} />
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>

  )
})
export default App;

// .finally(() => setLoading(false))