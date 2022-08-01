import { text, image } from '@keystone-6/core/fields'

module.exports = {
    fields: {
        title: text({
            label: 'Название'
        }),
        href: text({
            label: 'Ссылка для перехода'
        }),
        file: image({
            label: 'Файл баннера',
            storage: 'localImages'
        })
    }
}
