import { integer, text, relationship } from '@keystone-6/core/fields'

interface mainMenuItemListOptions {
    title,
    weight,
    subItems,
}

const opts: mainMenuItemListOptions = {
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
    }
}

module.exports = {
    fields: {
        title: text(opts.title),
        weight: integer(opts.weight),
        subItems: relationship(opts.subItems)
    }
}
