
import { checkbox, integer, text, relationship } from '@keystone-6/core/fields'

interface menuItemListOptions {
    title,
    weight,
    subItems,
    slug,
    pageRef,
    isTopLevel
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
    subItems: {
        label: 'Пункты подменю',
        ref: 'MenuItem',
        many: true
    },
    slug: {
        label: 'Путь в URL-адресе (path, slug)',
        validation: {
            isRequired: true
        },
        isIndexed: 'unique'
    },
    pageRef: {
        label: 'Переход через пункт меню на страницу:',
        ref: 'Page.menuItemRef',
        many: false
    },
    isTopLevel: {
        defaultValue: true
    }
}

module.exports = {
    fields: {
        title: text(opts.title),
        weigth: integer(opts.weight),
        subItems: relationship(opts.subItems),
        slug: text(opts.slug),
        pageRef: relationship(opts.pageRef),
        isTopLevel: checkbox(opts.isTopLevel)
    }
}
