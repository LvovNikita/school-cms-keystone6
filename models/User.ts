import { text, password, checkbox, relationship } from '@keystone-6/core/fields'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const userModel = {
    fields: {
        username: text({
            label: 'Имя пользователь',
            validation: {
                isRequired: true,
                length: {
                    min: 2
                }
            }
        }),
        password: password({
            label: 'Пароль',
            db: {
                isNullable: false
            },
            validation: {
                isRequired: true,
                rejectCommon: true,
                length: {
                    min: 8,
                    max: 32
                }
            }
        }),
        email: text({
            label: 'Адрес электронной почты',
            ...required,
            isIndexed: 'unique'
        }),
        teacherRef: relationship({
            label: 'Связать с профилем учителя:',
            ref: 'Teacher',
            many: false
        }),
        isAdmin: checkbox({
            label: 'Является администратором',
            defaultValue: false
        })
    },
    ui: {
        label: 'Пользователи',
        description: 'В этом разделе можно управлять пользователями'
    }

}
