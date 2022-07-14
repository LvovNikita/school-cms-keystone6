module.exports = {
    validation: {
        match: {
            regex: /$^|^\d{10}$/,
            explanation: 'ИНН должен быть десятизначным номером, например 1234567890'
        }
    }
}
