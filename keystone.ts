import { config } from '@keystone-6/core'

const db = require('./config/db')
const lists = require('./schema')

export default config({
    db,
    lists
})
