const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration) //вторым аргументом вызываем контроллер
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check) //3 аргументом authMiddleware мы проверяем токен

//для тестирования get, вызываем вторым параметром функцию ответа
//потом написали в контроллерах такую же проверку, выше заменив вторым параметром метод userController.check и др

// router.get('/auth', (req, res) => {
//     res.json({ message: 'Авторизация почти работает' })
// })

module.exports = router