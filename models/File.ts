import { file, text } from '@keystone-6/core/fields'
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
        })
    }
}
