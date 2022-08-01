import { file, text } from '@keystone-6/core/fields'

module.exports = {
    fields: {
        filename: text({
            label: 'Название'
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
