import { image, relationship, text } from '@keystone-6/core/fields'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const photoModel = {
    fields: {
        title: text({
            label: 'Название',
            ...required
        }),
        description: text({
            label: 'Описание'
        }),
        photo: image({
            label: 'Фотография',
            storage: 'localImages'
        }),
        albumRef: relationship({
            label: 'Альбомы с фотографией:',
            ref: 'Album.photoRef',
            many: true
        })
        // tag: null
    }
}
