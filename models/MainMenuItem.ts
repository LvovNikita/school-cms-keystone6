import { integer, text, relationship } from '@keystone-6/core/fields'

interface mainMenuItemListOptions {
    title,
    weight,
    subItemsRef,
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
    subItemsRef: {
        label: 'Пункты подменю',
        ref: 'MenuItem.mainMenuRef',
        many: true
    }
}

module.exports = {
    fields: {
        title: text(opts.title),
        weight: integer(opts.weight),
        subItemsRef: relationship(opts.subItemsRef)
    }
}
