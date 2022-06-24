import { config, list } from '@keystone-6/core'

const db = require('./config/db')
const userModel = require('./models/User')
const teacherModel = require('./models/Teacher')
const newsPostModel = require('./models/NewsPost')

const lists = {
    User: list(userModel),
    Teacher: list(teacherModel),
    NewsPost: list(newsPostModel)
}

export default config({
    db,
    lists
})
