import { text, timestamp } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'

const wysiwyg = document
const wysiwygOptions = require('../util/fieldsOptions/wysiwygOptions')

interface newsPostListOptions {
    title,
    content,
    publicationDate
}

const opts: newsPostListOptions = {
    title: {
        label: 'Заголовок',
        validation: {
            isRequired: true
        }
    },
    content: {
        label: 'Текст',
        ...wysiwygOptions
    },
    publicationDate: {
        label: 'Дата публикации',
        defaultValue: {
            kind: 'now'
        }
    }
}

module.exports = {
    fields: {
        title: text(opts.title),
        content: wysiwyg(opts.content),
        publicationDate: timestamp(opts.publicationDate)
        // tags: relationship
    }
}
