import { file, text, relationship } from '@keystone-6/core/fields'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const fileModel = {
    fields: {
        filename: text({
            label: 'Название',
            ...required
        }),
        description: text({
            label: 'Описание'
        }),
        file: file({
            label: 'Файл',
            storage: 'localFiles'
        }),
        tagRef: relationship({
            label: 'Теги:',
            ref: 'Tag.fileRef',
            many: true
        })
    },
    ui: {
        label: 'Файлы',
        description: 'В этом разделе можно добавить файла'
    }
}
