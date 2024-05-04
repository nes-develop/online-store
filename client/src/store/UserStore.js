import { makeAutoObservable } from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false //временно для авторизации
        this._user = {}
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
