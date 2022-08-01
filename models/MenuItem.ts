
import { integer, text, relationship } from '@keystone-6/core/fields'
import { slugValidation } from '../util/fieldsValidation/slugValidation'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const menuItemModel = {
    fields: {
        title: text({
            label: 'Название',
            ...required
        }),
        weight: integer({
            label: 'Вес (чем меньше, тем ближе к началу)',
            defaultValue: 999
        }),
        slug: text({
            label: 'Путь в URL-адресе (path, slug)',
            validation: Object.assign({},
                required,
                slugValidation.validation
            ),
            isIndexed: 'unique'
        }),
        mainMenuRef: relationship({
            label: 'Нахожится в разделе основного меню:',
            ref: 'MainMenuItem.subItemsRef',
            many: false
        }),
        pageRef: relationship({
            label: 'Переход через пункт меню на страницу:',
            ref: 'Page.menuItemRef',
            many: false
        })
    }
}
