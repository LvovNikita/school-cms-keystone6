import { config, list } from '@keystone-6/core';

const dbOptions = require('./config/db')
const userModel = require('./models/User')

const lists = {
    User: list(userModel)
}

export default config({
    db: dbOptions,
    lists: lists
});