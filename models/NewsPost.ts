import { text, timestamp } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'

const documentOptions = require('../util/fieldsOptions/documentOptions')

module.exports = {
    fields: {
        title: text(),
        content: document({ ...documentOptions }),
        publicationDate: timestamp()
        // tags: relationship
    }
}
