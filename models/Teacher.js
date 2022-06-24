import { text, select, timestamp, integer, json } from '@keystone-6/core/fields';

module.exports = {
    fields: {
        firstname: text(),
        lastname: text(),
        middlename: text(),
        dateOfBirth: timestamp(),
        position: select({
            datatype: 'enum',
            options: [
                { label: 'Учитель', value: 'TEACHER' },
                { label: 'Заместитель директора', value: 'DEPUTEE_DIRECTOR'},
                { label: 'Директор', value: 'DIRECTOR'}
            ]
        }),
        subjects: json({}),
        email: text(),
        phone: text(),
        category : select({
            datatype: 'enum',
            options: [
                { label: 'Высшая', value: 'HIGHEST'},
                { label: 'Первая', value: 'FIRST'},
                { label: 'Отсутствует', value: 'NONE'},
            ]
        }),
        education: text(),
        educationLevel: select({
            datatype: 'enum',
            options: [
                { label: 'Высшее', value: 'HIED' },
                { label: 'Высшее педагогическое', value: 'PED'},
                { label: 'Среднее-профессиональное', value: 'VOCED'}
            ]
        }),
        degree: select({
            datatype: 'enum',
            options: [
                { label: 'Кандидат наук', value: 'CANDIDATE'},
                { label: 'Доктор наук', value: 'DOCTOR' } 
            ]
        }),
        academicTitle: select({
            datatype: 'enum',
            options: [
                { label: 'Ассистент', value: 'ASSISTANT' },
                { label: 'Преподаватель', value: 'LECTURER' },
                { label: 'Старший преподаватель', value: 'SENIOR_LECTURER' },
                { label: 'Доцент', value: 'ASSOCIATE' },
                { label: 'Профессор', value: 'PROFESSOR' },
            ]
        }),
        totalYearsExperience: integer(),
        totalYearsExperienceUpdateDate: timestamp(),
        teachingExperienceYears: integer(),
        teachingExperienceYearsUpdateDate: timestamp(),
        worksSinceDate: timestamp(),
        trainings: json({}),
        experience: text(),
        additionalInfo: text()
        // * photoUrl
    }
}