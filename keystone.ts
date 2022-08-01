import { config } from '@keystone-6/core'
import { withAuth, session } from './auth/auth'
import { db } from './config/db'
import { lists } from './schema'
import { localFiles, localImages } from './config/storage'

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
