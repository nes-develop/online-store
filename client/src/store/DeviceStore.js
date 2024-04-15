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
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setBrands(devices) {
        this._devices = devices
    }


    //функции для получения параметров из нашего состояния
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
