import { text } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'

const wysiwyg = document
const wysiwygOptions = require('../util/fieldsOptions/wysiwygOptions')

module.exports = {
    fields: {
        title: text(),
        content: wysiwyg({ ...wysiwygOptions })
    }
}
