
import { integer, text, relationship } from '@keystone-6/core/fields'

interface menuItemListOptions {
    title,
    weight,
    slug,
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
        pageRef: relationship(opts.pageRef)
    }
}
