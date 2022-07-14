module.exports = {
    validation: {
        match: {
            regex: /$^|^https?:\/\//,
            explanation: 'Должен быть указан протокол http или https, например https://www.website.com'
        }
    }
}
