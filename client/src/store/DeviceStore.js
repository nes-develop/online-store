import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        //моковые данные
        this._types = [
            { id: 1, name: "Холодильники" },
            { id: 2, name: "Смартфоны" },
            { id: 3, name: "Ноутбуки" },
            { id: 4, name: "Телевизоры" },
        ]
        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" },
            { id: 3, name: "Lenovo" },
            { id: 4, name: "Asus" },
        ]
        this._devices = [
            { id: 1, name: "15 pro", price: 120000, rating: 0, img: "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg" },
            { id: 2, name: "15 pro", price: 120000, rating: 0, img: "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg" },
            { id: 3, name: "15 pro", price: 120000, rating: 0, img: "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg" },
            { id: 4, name: "15 pro", price: 120000, rating: 0, img: "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg" },
            { id: 5, name: "15 pro", price: 120000, rating: 0, img: "96a724e0-6415-4cca-99c5-e0d1198342bd.jpg" }
        ]
        //выбранный тип и брэнд
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }
    // ниже меняем состояние 
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

}
