import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        //моковые данные
        this._type = [
            { "id": 1, "name": "Холодильники" },
            { "id": 2, "name": "Смартфоны" }
        ]
        this._brands = [
            { "id": 1, "name": "Samsung" },
            { "id": 2, "name": "Apple" }
        ]
        this._devices = [
            {"id": 1,"name": "15 pro","price": 120000,"rating": 0,"img": "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg"},
            {"id": 2,"name": "15 pro","price": 120000,"rating": 0,"img": "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg"},
            {"id": 3,"name": "15 pro","price": 120000,"rating": 0,"img": "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg"},
            {"id": 4,"name": "15 pro","price": 120000,"rating": 0,"img": "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg"},
            {"id": 5,"name": "15 pro","price": 120000,"rating": 0,"img": "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg"}
        ]


        makeAutoObservable(this)
    }
    // ниже меняем состояние 
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    //функции для получения параметров из нашего состояния
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}
