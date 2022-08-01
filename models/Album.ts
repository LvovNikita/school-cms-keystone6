import { ListConfig } from '@keystone-6/core'
import { text, relationship } from '@keystone-6/core/fields'
import { BaseListTypeInfo } from '@keystone-6/core/types'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const albumModel: ListConfig<BaseListTypeInfo, any> = {
    fields: {
        title: text({
            label: 'Название',
            ...required
        }),
        description: text({
            label: 'Описание'
        }),
        photoRef: relationship({
            label: 'Фотографии в альбоме:',
            ref: 'Photo.albumRef',
            many: true
        })
    },
    access: {},
    ui: {
        label: 'Альбомы',
        description: 'В этом разделе можно создать альбом для фотографий',
    },
    hooks: {},
    graphql: {},
    db: {},
    defaultIsFilterable: false,
    defaultIsOrderable: false
}
