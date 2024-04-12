const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    //функция создание брэнда
    async create(req, res) {
        const { name } = req.body // через деструктуризацию достаем из тела запроса название типа, тк это пост запрос
        const brand = await Brand.create({ name }) //асинхрон поэтому добавили await, передаем только name, тк в моделе указали что id autoIncrement
        return res.json(brand)
    }
    //функция получение всех брэндов
    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)

    }
}

module.exports = new BrandController()