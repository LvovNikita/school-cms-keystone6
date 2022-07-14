import { text } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'

const wysiwyg = document
const wysiwygOptions = require('../util/fieldsOptions/wysiwygOptions')

interface blockListOptions {
    title,
    content
}

const opts: blockListOptions = {
    title: {
        label: 'Название блока',
        validation: {
            isRequired: true
        }
    },
    content: {
        ...wysiwygOptions
    }
}

module.exports = {
    fields: {
        title: text(opts.title),
        content: wysiwyg(opts.content)
    }
}
