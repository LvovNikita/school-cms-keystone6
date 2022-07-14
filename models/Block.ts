import { text } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'
import { wysiwygOptions } from '../util/fieldsOptions/wysiwygOptions'

const wysiwyg = document

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
