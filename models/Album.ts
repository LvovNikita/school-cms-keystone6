import { text, relationship } from '@keystone-6/core/fields'

module.exports = {
    fields: {
        title: text({
            label: 'Название'
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
