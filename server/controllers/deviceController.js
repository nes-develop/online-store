

const uuid = require('uuid')
const path = require('path') //встроенная функция для путей
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')
const { info } = require('console')

class DeviceController {
    //функция создание девайса
    async create(req, res) {

        try {
            let { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg" //генерация имени файлов, вызываем функцию v4 и добавляем к ней расширение jpg
            img.mv(path.resolve(__dirname, '..', 'static', fileName))  //методом resolve переместили (__dirname) далее в корень(..) и тд

            //передаем не сам файл, его название котороое сформировали fileName
            //rating не передаем, тк он по умолчанию 0
            const device = await Device.create({ name, price, brandId, typeId, img: fileName })

            if (info) {
                //когда данные передали через form-data, то они пришли в виде строки, поэтому массив на фронте парсим в json строку, на бэке в js объекты
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                });
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    //функция получение всех девайсов
    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query
        page = page || 1 //страница не указана, подставляем 1
        limit = limit || 9 //лимит вывода не указан, подставляем 9
        let offset = page * limit - limit //отступ, если вторая страница 2*9-9 = 9
        let devices;
        //фильтрация, заменили findAll на findAndCountAll указывает всего всего id и дальше фильтрация
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset })
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset })
        }
        return res.json(devices)
    }
    //функция создания 1 девайса
    async getOne(req, res) {
        const { id } = req.params // прилетает из роута router.get('/:id', deviceController.getOne)
        const device = await Device.findOne(
            {
                where: { id },
                include: [{ model: DeviceInfo, as: 'info' }] //todo
            },
        )
        return res.json(device)
        
    }
}

module.exports = new DeviceController()