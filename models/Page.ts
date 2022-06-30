import { relationship, text } from '@keystone-6/core/fields'

interface pageListOptions {
    title,
    menuItemRef,
    blocks,
}

const opts: pageListOptions = {
    title: {
        label: 'Заголовок страницы',
        validation: {
            isRequired: true
        }
    },
    menuItemRef: {
        label: 'Переход на страницу через пункт меню:',
        ref: 'MenuItem.pageRef',
        many: false
    },
    blocks: {
        label: 'Блоки, составляющие страницу',
        ref: 'Block',
        many: true
    }
}

module.exports = {
    fields: {
        title: text(opts.title),
        menuItemRef: relationship(opts.menuItemRef),
        blocks: relationship(opts.blocks)
    }
}
