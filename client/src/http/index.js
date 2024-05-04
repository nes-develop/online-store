import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authIntercepter = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}` //todo
    return config
}
//подставляем в хэдер запроса токен
$authHost.interceptors.request.use(authIntercepter)


export {
    $host,
    $authHost
}