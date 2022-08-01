import { text, timestamp, relationship } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'
import { wysiwygOptions } from '../util/fieldsOptions/wysiwygOptions'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

const wysiwyg = document

export const newsPostModel = {
    fields: {
        title: text({
            label: 'Заголовок',
            ...required
        }),
        content: wysiwyg({
            label: 'Текст',
            ...wysiwygOptions
        }),
        publicationDate: timestamp({
            label: 'Дата публикации',
            defaultValue: {
                kind: 'now'
            }
        }),
        tagRef: relationship({
            label: 'Теги:',
            ref: 'Tag.newsPostRef',
            many: true
        })
    },
    ui: {
        label: 'Новости',
        description: 'В этом разделе можно создать новостной пост'
    }
}
