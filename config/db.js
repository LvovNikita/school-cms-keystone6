import { initData } from '../data/init'

module.exports = {
    provider: 'sqlite',
    url: 'file:./keystone.db',
    async onConnect (context) {
        if (process.argv.includes('--init-data')) {
            await initData(context)
        }
    }
}
