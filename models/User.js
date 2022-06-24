import { text, password, checkbox } from '@keystone-6/core/fields';

module.exports = {
    fields: {
        username: text(),
        password: password(),
        email: text(),
        isAdmin: checkbox()
    }
}