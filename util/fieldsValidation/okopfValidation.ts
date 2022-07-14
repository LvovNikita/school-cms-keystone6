module.exports = {
    validation: {
        match: {
            regex: /$^|^\d{1} \d{2} \d{2}$/,
            explanation: 'ОКОПФ должен быть записан в формате X XX XX, например 1 00 00'
        }
    }
}
