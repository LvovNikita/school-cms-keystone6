import { text, relationship } from '@keystone-6/core/fields'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const albumModel = {
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
    }
}
