import { relationship, text } from '@keystone-6/core/fields'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const subjectModel = {
    fields: {
        title: text({
            label: 'Название',
            ...required
        }),
        teacherRef: relationship({
            label: 'Учителя, преподающие предмет:',
            ref: 'Teacher',
            many: true
        })
    }
}
