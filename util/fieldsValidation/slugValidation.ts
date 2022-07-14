module.exports = {
    validation: {
        match: {
            regex: /$^|^[\w|-]+$/,
            explanation: 'Ссылка на страницу должна содержать только буквы, цифры и дефисы, например my-new-page01'
        }
    }
}
