import { config } from '@keystone-6/core'
import { withAuth, session } from './auth/auth'
import { db } from './config/db'
const lists = require('./schema')
const { localFiles, localImages } = require('./config/storage')

export default config(
    withAuth({
        db,
        lists,
        session,
        ui: {
            isAccessAllowed: (ctx) => !!ctx.session?.data
        },
        storage: {
            localFiles,
            localImages
        }
    })
)
