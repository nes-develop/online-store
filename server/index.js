require('dotenv').config() //импорт для работы конифга 
const express = require('express')
const sequelize = require('./db')


const PORT = process.env.PORT || 3001

const app = express()

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