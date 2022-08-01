import { config } from '@keystone-6/core'

const db = require('./config/db')
const lists = require('./schema')
const { localFiles, localImages } = require('./config/storage')

export default config({
    db,
    lists,
    storage: {
        localFiles,
        localImages
    }
})
