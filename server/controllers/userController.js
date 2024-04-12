
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        //payload
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' } //время жизни токена
    )
}

class UserController {
    //функция регистрации
    async registration(req, res, next) {
        const { email, password, role } = req.body
        //проверка на присутствие в запросе емейла и пароля
        if (!email || !password) {
            return next(ApiError.badRequest('Некоректный email или password'))
        }
        const candidate = await User.findOne({ where: { email } })
        //проверка на существующего пользока
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        //хэширование пароля
        const hashPassword = await bcrypt.hash(password, 5)
        //создание пользователя
        const user = await User.create({ email, role, password: hashPassword })
        //создание корзины пользователя по только что созданному пользаку user.id
        const basket = await Basket.create({ userId: user.id })
        //токен доступа, переделали через функцию тк не было роли
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
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