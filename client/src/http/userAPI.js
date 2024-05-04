
import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";


//ниже аналог регистрации, логина и проверки через апи, $host получаем из axios.create

export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' })
    localStorage.setItem('token', data.token) //по ключу токен помещаем токен в тело запроса
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}


export const check = async () => {
    const { data } = await $authHost.get('api/user/auth') //проверка на валидность токена
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
