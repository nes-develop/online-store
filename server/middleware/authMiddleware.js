const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] //тк в хэдере запроса токен указывается Bearer sadasddfsdf, то по пробелу мы его находим
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY) //методом verifiy проверряем токен
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({ message: "Не авторизован!" })
    }
};
