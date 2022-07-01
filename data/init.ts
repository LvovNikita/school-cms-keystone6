import { KeystoneContext } from '@keystone-6/core/types'
import { mainMenuItems } from './data'

export async function initData (context: KeystoneContext) {
    const createMainMenuItem = async (menuItemData) => {
        await context.query.MainMenuItem.createOne({
            data: menuItemData,
            query: 'id'
        })
    }

    for (const menuItem of mainMenuItems) {
        await createMainMenuItem(menuItem)
    }

    console.log('Done!')
    process.exit()
}
