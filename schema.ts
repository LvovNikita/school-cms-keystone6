import { list } from '@keystone-6/core'

const infoModel = require('./models/Info')
const userModel = require('./models/User')
const teacherModel = require('./models/Teacher')
const menuItemModel = require('./models/MenuItem')
const pageModel = require('./models/Page')
const blockModel = require('./models/Block')
const newsPostModel = require('./models/NewsPost')

module.exports = {
    Info: list(infoModel),
    User: list(userModel),
    Teacher: list(teacherModel),
    MenuItem: list(menuItemModel),
    Page: list(pageModel),
    Block: list(blockModel),
    NewsPost: list(newsPostModel)
}
