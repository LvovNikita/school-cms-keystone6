import { config, list } from '@keystone-6/core';

const dbOptions = require('./config/db')
const userModel = require('./models/User')
const teacherModel = require('./models/Teacher')

const lists = {
    User: list(userModel),
    Teacher: list(teacherModel)
}

export default config({
    db: dbOptions,
    lists: lists
});