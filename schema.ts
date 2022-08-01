import { list } from '@keystone-6/core'

import { albumModel } from './models/Album'
import { bannerModel } from './models/Banner'
import { blockModel } from './models/Block'
import { fileModel } from './models/File'
import { newsPostModel } from './models/NewsPost'
import { pageModel } from './models/Page'
import { photoModel } from './models/Photo'
import { subjectModel } from './models/Subject'
import { menuItemModel } from './models/MenuItem'
import { mainMenuItemModel } from './models/MainMenuItem'
import { teacherModel } from './models/Teacher'
import { userModel } from './models/User'

const schoolModel = require('./models/School')

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
