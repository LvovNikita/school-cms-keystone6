import { config, list } from '@keystone-6/core'

const db = require('./config/db')
const userModel = require('./models/User')
const teacherModel = require('./models/Teacher')
const menuItemModel = require('./models/MenuItem')
const pageModel = require('./models/Page')
const newsPostModel = require('./models/NewsPost')

const lists = {
    User: list(userModel),
    Teacher: list(teacherModel),
    MenuItem: list(menuItemModel),
    Page: list(pageModel),
    NewsPost: list(newsPostModel)
}

export default config({
    db,
    lists
})
