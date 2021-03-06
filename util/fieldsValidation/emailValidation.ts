export const emailValidation = {
    validation: {
        match: {
            regex: /$^|^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            explanation: 'Имя почтового ящика и доменное имя сервера могут содержать латинские буквы и цифры, дефисы и точки и должны быть разделены символом @, например: email-test@test.com'
        }
    }
}
