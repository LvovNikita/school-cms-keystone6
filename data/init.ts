import { KeystoneContext } from '@keystone-6/core/types'
import { mainMenuItems } from './mainMenuItems'
import { menuItems } from './menuItems'

export async function initData (context: KeystoneContext) {
    const createMainMenuItem = async (menuItemData) => {
        await context.query.MainMenuItem.createOne({
            data: menuItemData,
            query: 'id'
        })
    }

    const createMenuItems = async (menuItemData, id?) => {
        await context.query.MenuItem.createOne({
            data: menuItemData,
            query: 'id'
        })
    }

    for (const menuItem of menuItems) {
        await createMenuItems(menuItem)
    }

    await createMainMenuItem(mainMenuItems[0])

    console.log('Done!')
    process.exit()
}
