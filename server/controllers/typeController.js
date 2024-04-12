const { Type } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    //функция создание типа
    async create(req, res) {
        const { name } = req.body // через деструктуризацию достаем из тела запроса название типа, тк это пост запрос
        const type = await Type.create({ name }) //асинхрон поэтому добавили await, передаем только name, тк в моделе указали что id autoIncrement
        return res.json(type)
    }
    //функция получение всех типов
    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)

    }
}

module.exports = new TypeController()