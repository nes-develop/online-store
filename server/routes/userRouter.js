const Router = require('express')
const router = new Router()

router.post('/registration',)
router.post('/login',)
// router.get('/auth',)

//для тестирования get
router.get('/auth', (req, res) => {
    res.json({ message: 'Авторизация почти работает' })
})

module.exports = router