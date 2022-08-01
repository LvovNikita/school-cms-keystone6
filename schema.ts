import { list } from '@keystone-6/core'

const schoolModel = require('./models/School')
const userModel = require('./models/User')
const teacherModel = require('./models/Teacher')
const mainMenuItemModel = require('./models/MainMenuItem')
const menuItemModel = require('./models/MenuItem')
const pageModel = require('./models/Page')
const blockModel = require('./models/Block')
const newsPostModel = require('./models/NewsPost')
const subjectModel = require('./models/Subject')
const fileModel = require('./models/File')
const bannerModel = require('./models/Banner')
const albumModel = require('./models/Album')
const photoModel = require('./models/Photo')

export const lists = {
    School: list(schoolModel),
    User: list(userModel),
    Teacher: list(teacherModel),
    MainMenuItem: list(mainMenuItemModel),
    MenuItem: list(menuItemModel),
    Page: list(pageModel),
    Block: list(blockModel),
    NewsPost: list(newsPostModel),
    Subject: list(subjectModel),
    File: list(fileModel),
    Banner: list(bannerModel),
    Album: list(albumModel),
    Photo: list(photoModel)
}
