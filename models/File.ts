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
            storage: 'local_files'
        })
    }
}
