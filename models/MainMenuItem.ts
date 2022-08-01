import { integer, text, relationship } from '@keystone-6/core/fields'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const mainMenuItemModel = {
    fields: {
        title: text({
            label: 'Название',
            ...required
        }),
        weight: integer({
            label: 'Вес (чем меньше, тем ближе к началу)',
            defaultValue: 999
        }),
        subItemsRef: relationship({
            label: 'Пункты подменю',
            ref: 'MenuItem.mainMenuRef',
            many: true
        })
    }
}
