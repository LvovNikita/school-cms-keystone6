import { text } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'
import { wysiwygOptions } from '../util/fieldsOptions/wysiwygOptions'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

const wysiwyg = document

export const blockModel = {
    fields: {
        title: text({
            label: 'Название блока',
            ...required
        }),
        content: wysiwyg(wysiwygOptions)
    },
    ui: {
        label: 'Блоки страниц',
        description: 'В этом разделе можно создать блок (составная часть страницы)'
    }
}
