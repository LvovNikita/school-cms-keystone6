import { KeystoneContext } from '@keystone-6/core/types'
import { mainMenuItems } from './mainMenuItems'
import { menuItems } from './menuItems'

const createDBItem = async (item, collection) => {
    await collection.createOne({
        data: item,
        query: 'id'
    })
}

export async function initData (context: KeystoneContext) {
    await createDBItem(mainMenuItems[0], context.query.MainMenuItem)
    for (const menuItem of menuItems) {
        await createDBItem(menuItem, context.query.MenuItem)
    }
    console.log('Done!')
    process.exit()
}
