import { list, ListSchemaConfig } from '@keystone-6/core'

import { albumModel } from '../models/Album'
import { bannerModel } from '../models/Banner'
import { blockModel } from '../models/Block'
import { fileModel } from '../models/File'
import { newsPostModel } from '../models/NewsPost'
import { pageModel } from '../models/Page'
import { photoModel } from '../models/Photo'
import { subjectModel } from '../models/Subject'
import { menuItemModel } from '../models/MenuItem'
import { mainMenuItemModel } from '../models/MainMenuItem'
import { schoolModel } from '../models/School'
import { tagModel } from '../models/Tag'
import { teacherModel } from '../models/Teacher'
import { userModel } from '../models/User'

export const lists: ListSchemaConfig = {
    Album: list(albumModel),
    Banner: list(bannerModel),
    Block: list(blockModel),
    File: list(fileModel),
    MainMenuItem: list(mainMenuItemModel),
    MenuItem: list(menuItemModel),
    NewsPost: list(newsPostModel),
    Page: list(pageModel),
    Photo: list(photoModel),
    School: list(schoolModel),
    Subject: list(subjectModel),
    Tag: list(tagModel),
    Teacher: list(teacherModel),
    User: list(userModel)
}
