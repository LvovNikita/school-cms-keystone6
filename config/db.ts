import { BaseKeystoneTypeInfo, DatabaseConfig } from '@keystone-6/core/types'
import { initData } from '../data/init'

export const db: DatabaseConfig<BaseKeystoneTypeInfo> = {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || 'file:./keystone.db',
    async onConnect (context) {
        if (process.argv.includes('--init-data')) {
            await initData(context)
        }
    }
}
