import { list } from '@keystone-6/core'

const schoolModel = require('./models/School')
const userModel = require('./models/User')
const teacherModel = require('./models/Teacher')
const menuItemModel = require('./models/MenuItem')
const pageModel = require('./models/Page')
const blockModel = require('./models/Block')
const newsPostModel = require('./models/NewsPost')
const subjectModel = require('./models/Subject')
const fileModel = require('./models/File')
const bannerModel = require('./models/Banner')

module.exports = {
    School: list(schoolModel),
    User: list(userModel),
    Teacher: list(teacherModel),
    MenuItem: list(menuItemModel),
    Page: list(pageModel),
    Block: list(blockModel),
    NewsPost: list(newsPostModel),
    Subject: list(subjectModel),
    File: list(fileModel),
    Banner: list(bannerModel)
}
