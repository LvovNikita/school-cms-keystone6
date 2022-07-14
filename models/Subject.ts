import { relationship, text } from '@keystone-6/core/fields'

module.exports = {
    fields: {
        title: text({
            label: 'Название'
        }),
        teacherRef: relationship({
            label: 'Учителя, преподающие предмет',
            ref: 'Teacher',
            many: true
        })
    }
}
