
const ApiError = require('../error/ApiError')
class UserController {
    //функция регистрации
    async registration(req, res) {

    }
    //функция входа
    async login(req, res) {

    }
    // //функция проверки входа
    async check(req, res, next) {
        // const query = req.query
        //res.json(query) //если хотим весь запрос посмотреть query, если конкретный то query.id
        const { id } = req.query //Деструктуризация
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id) //Деструктуризация
    }

    //функция проверки входа, тестим метод check
    // async check(req, res) {
    //     res.json('проверка контроллера')
    // }
}

module.exports = new UserController()