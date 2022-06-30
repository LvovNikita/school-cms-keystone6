import { text, select, timestamp, integer } from '@keystone-6/core/fields'

const Positions = [
    { label: 'Учитель', value: 'TEACHER' },
    { label: 'Заместитель директора', value: 'DEPUTEE_DIRECTOR' },
    { label: 'Директор', value: 'DIRECTOR' }
]

const Categories = [
    { label: 'Высшая', value: 'HIGHEST' },
    { label: 'Первая', value: 'FIRST' },
    { label: 'Отсутствует', value: 'NONE' }
]

const EducationLevels = [
    { label: 'Высшее', value: 'HIED' },
    { label: 'Высшее педагогическое', value: 'PED' },
    { label: 'Среднее-профессиональное', value: 'VOCED' }
]

const Degrees = [
    { label: 'Кандидат наук', value: 'CANDIDATE' },
    { label: 'Доктор наук', value: 'DOCTOR' }
]

const AcademicTitles = [
    { label: 'Ассистент', value: 'ASSISTANT' },
    { label: 'Преподаватель', value: 'LECTURER' },
    { label: 'Старший преподаватель', value: 'SENIOR_LECTURER' },
    { label: 'Доцент', value: 'ASSOCIATE' },
    { label: 'Профессор', value: 'PROFESSOR' }
]

const opts = {
    required: {
        validation: {
            isRequired: true
        }
    },
    yearsOfExperience: {
        defaultValue: 0,
        validation: {
            min: 0
        },
        hooks: {}
    },
    enum (enumArr): { type, options } {
        return {
            type: 'enum',
            options: enumArr
        }
    }
}

module.exports = {
    label: 'Учитель',
    fields: {
        firstname: text({ label: 'Имя', ...opts.required }),
        lastname: text({ label: 'Фамилия', ...opts.required }),
        middlename: text({ label: 'Отчество' }),
        dateOfBirth: timestamp({ label: 'Дата рождения' }),
        position: select({ label: 'Должность', ...opts.enum(Positions) }),
        subjects: text({ label: 'Преподаваемые предметы' }),
        email: text({ label: 'Адрес электронной почты' }),
        phone: text({ label: 'Номер телефона' }),
        category: select({ label: 'Квалификационная категория', ...opts.enum(Categories) }),
        education: text({ label: 'Образование (место учёбы)' }),
        educationLevel: select({ label: 'Уровень образования', ...opts.enum(EducationLevels) }),
        degree: select({ label: 'Учёная степень', ...opts.enum(Degrees) }),
        academicTitle: select({ label: 'Учёное звание', ...opts.enum(AcademicTitles) }),
        totalYearsExperience: integer({ label: 'Общий трудовой стаж', ...opts.yearsOfExperience }),
        teachingExperienceYears: integer({ label: 'Педагогический стаж', ...opts.yearsOfExperience }),
        worksSinceDate: timestamp({ label: 'Работает в данном учреждении с:' }),
        trainings: text({ label: 'Курсы повышения квалификации', ui: { displayMode: 'textarea' } }),
        additionalInfo: text({ label: 'О педагоге:', ui: { displayMode: 'textarea' } })
        // totalYearsExperienceUpdateDate: timestamp({
        //     label: 'Дата обновления информации о стаже',
        // }),
        // teachingYearsExperienceUpdateDate: timestamp({
        //     label: 'Дата обновления информации о стаже'
        // }),
        // experience: text({
        //     label: ''
        // }),
        // * photoUrl
    }
}
