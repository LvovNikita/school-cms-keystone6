import { relationship, text } from '@keystone-6/core/fields'

export const tagModel = {
    fields: {
        tag: text({
            label: 'Название тега'
        }),
        photoRef: relationship({
            label: 'Отмеченные тегом фотографии:',
            ref: 'Photo.tagRef',
            many: true
        }),
        fileRef: relationship({
            label: 'Отмеченные тегом файлы:',
            ref: 'File.tagRef',
            many: true
        }),
        newsPostRef: relationship({
            label: 'Отмеченные тегом новости:',
            ref: 'NewsPost.tagRef',
            many: true
        })
    },
    ui: {
        label: 'Теги',
        description: 'В этом разделе можно добавить теги для упрощения поиска по фотографиям, файлам и новостям'
    }
}
