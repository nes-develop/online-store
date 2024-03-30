require('dotenv').config() //импорт для работы конифга 
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')


const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//для тестирования get
// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'WORKING!!!' })
// })

const start = async () => { //все операции с БД асинхронные
    try {
        await sequelize.authenticate() //асинхрон подключение к БД
        await sequelize.sync() //сверяет состояние БД со схемой
        app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()