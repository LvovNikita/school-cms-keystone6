import { relationship, text } from '@keystone-6/core/fields'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const pageModel = {
    fields: {
        title: text({
            label: 'Заголовок страницы',
            ...required
        }),
        menuItemRef: relationship({
            label: 'Переход на страницу через пункт меню:',
            ref: 'MenuItem.pageRef',
            many: false
        }),
        blocks: relationship({
            label: 'Блоки, составляющие страницу:',
            ref: 'Block',
            many: true
        })
    }
}
