import { relationship, text } from '@keystone-6/core/fields'

module.exports = {
    fields: {
        title: text(),
        menuItemRef: relationship({ ref: 'MenuItem.pageRef', many: false })
        // blocks: relationship({})
    }
}
