import { list } from '@keystone-6/core'

const userModel = require('./models/User')
const teacherModel = require('./models/Teacher')
const menuItemModel = require('./models/MenuItem')
const pageModel = require('./models/Page')
const newsPostModel = require('./models/NewsPost')
const blockModel = require('./models/Block')

module.exports = {
    User: list(userModel),
    Teacher: list(teacherModel),
    MenuItem: list(menuItemModel),
    Page: list(pageModel),
    Block: list(blockModel),
    NewsPost: list(newsPostModel)
}
