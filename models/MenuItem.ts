
import { integer, text, relationship } from '@keystone-6/core/fields'

interface menuItemListOptions {
    title,
    weight,
    slug,
    mainMenuRef,
    pageRef,
}

const opts: menuItemListOptions = {
    title: {
        label: 'Название',
        validation: {
            isRequired: true
        }
    },
    weight: {
        label: 'Вес (чем меньше, тем ближе к началу)',
        defaultValue: 999
    },
    slug: {
        label: 'Путь в URL-адресе (path, slug)',
        validation: {
            isRequired: true
        },
        isIndexed: 'unique'
    },
    mainMenuRef: {
        label: 'Нахожится в разделе основного меню:',
        ref: 'MainMenuItem.subItemsRef',
        many: false
    },
    pageRef: {
        label: 'Переход через пункт меню на страницу:',
        ref: 'Page.menuItemRef',
        many: false
    }
}

module.exports = {
    fields: {
        title: text(opts.title),
        weight: integer(opts.weight),
        slug: text(opts.slug),
        mainMenuRef: relationship(opts.mainMenuRef),
        pageRef: relationship(opts.pageRef)
    }
}
