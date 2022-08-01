import { config } from '@keystone-6/core'
import { withAuth, session } from './auth/auth'
import { db } from './config/db'
import { lists } from './schema/schema'
import { localFiles, localImages } from './config/storage'

export default config(
    withAuth({
        db,
        lists,
        session,
        ui: {
            isDisabled: false,
            isAccessAllowed: ctx => !!ctx.session?.data,
            publicPages: []
        },
        storage: {
            localFiles,
            localImages
        }
        // server
        // graphql
        // extendGraphqlSchema
        // experimental
    })
)
