import { initData } from '../data/init'

module.exports = {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || 'file:./keystone.db',
    async onConnect (context) {
        if (process.argv.includes('--init-data')) {
            await initData(context)
        }
    }
}
