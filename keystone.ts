import { config } from '@keystone-6/core'
import { withAuth, session } from './auth/auth'

const db = require('./config/db')
const lists = require('./schema')

export default config(
    withAuth({
        db,
        lists,
        session,
        ui: {
            isAccessAllowed: (ctx) => !!ctx.session?.data
        }
    })
)
