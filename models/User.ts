import { text, password, checkbox } from '@keystone-6/core/fields'

interface userListOptions {
    username,
    password,
    email,
    isAdmin
}

const opts: userListOptions = {
    username: {
        label: 'Имя пользователь',
        validation: {
            isRequired: true,
            length: {
                min: 2
            }
        }
    },
    password: {
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
    },
    email: {
        label: 'Адрес электронной почты',
        validation: {
            isRequired: true
        }
    },
    isAdmin: {
        label: 'Является администратором',
        defaultValue: false
    }
}

module.exports = {
    fields: {
        username: text(opts.username),
        password: password(opts.password),
        email: text(opts.email),
        isAdmin: checkbox(opts.isAdmin)
    }
}
