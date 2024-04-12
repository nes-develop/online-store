const ApiError = require('../error/ApiError')

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) { //instanceof проверка принадлежит ли объект err классу ApiError
        return res.status(err.status).json({ message: err.message })
    }

    return res.status(500).json({ message: "Непредвиденная ошибка" }) //если нет ошибке в классе ApiError
}