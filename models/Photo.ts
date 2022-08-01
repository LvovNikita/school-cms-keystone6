import { image, relationship, text } from '@keystone-6/core/fields'

module.exports = {
    fields: {
        title: text({
            label: 'Название'
        }),
        description: text({
            label: 'Описание'
        }),
        photo: image({
            label: 'Фотография',
            storage: 'localImages'
        }),
        albumRef: relationship({
            label: 'Альбомы, в которых будет размещена фотография',
            ref: 'Album.photoRef',
            many: true
        })
        // tag: null
    }
}
