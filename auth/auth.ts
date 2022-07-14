import { createAuth } from '@keystone-6/auth'
import { statelessSessions } from '@keystone-6/core/session'
import dotenv from 'dotenv'

dotenv.config()

const session = statelessSessions({
    secret: process.env.SESSION_SECRET,
    maxAge: 60 * 60 * 24 * 30
})

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    sessionData: 'username',
    secretField: 'password',
    initFirstItem: {
        fields: ['username', 'email', 'password', 'isAdmin']
    }
})

export { withAuth, session }
