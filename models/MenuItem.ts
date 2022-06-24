
import { checkbox, integer, text, relationship } from '@keystone-6/core/fields'

module.exports = {
    fields: {
        title: text(),
        weigth: integer(),
        subItems: relationship({ ref: 'MenuItem', many: true }),
        slug: text(),
        // pegeRef: relationship
        isTopLevel: checkbox()
    }
}
