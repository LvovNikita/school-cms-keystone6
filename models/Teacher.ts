import { text, select, timestamp, integer } from '@keystone-6/core/fields'

const emailValidation = require('../util/fieldsValidation/emailValidation')
const phoneValidation = require('../util/fieldsValidation/phoneValidation')

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

const { required, zeroByDefault, nonNegative } = require('../util/fieldsOptions/kesytoneShorthands')

function segmentedEnum (enumArr): { type, options, ui } {
    return {
        type: 'enum',
        options: enumArr,
        ui: { displayMode: 'segmented-control' }
    }
}

module.exports = {
    label: 'Учитель',
    fields: {
        firstname: text({ label: 'Имя', ...required }),
        lastname: text({ label: 'Фамилия', ...required }),
        middlename: text({ label: 'Отчество' }),
        dateOfBirth: timestamp({ label: 'Дата рождения' }),
        position: select({ label: 'Должность', ...segmentedEnum(Positions) }),
        subjects: text({ label: 'Преподаваемые предметы' }),
        email: text({ label: 'Адрес электронной почты', ...emailValidation }),
        phone: text({ label: 'Номер телефона', ...phoneValidation }),
        category: select({ label: 'Квалификационная категория', ...segmentedEnum(Categories) }),
        education: text({ label: 'Образование (место учёбы)' }),
        educationLevel: select({ label: 'Уровень образования', ...segmentedEnum(EducationLevels) }),
        degree: select({ label: 'Учёная степень', ...segmentedEnum(Degrees) }),
        academicTitle: select({ label: 'Учёное звание', ...segmentedEnum(AcademicTitles) }),
        totalYearsExperience: integer({ label: 'Общий трудовой стаж', ...zeroByDefault, ...nonNegative }),
        teachingExperienceYears: integer({ label: 'Педагогический стаж', ...zeroByDefault, ...nonNegative }),
        worksSinceDate: timestamp({ label: 'Работает в данном учреждении с:' }),
        trainings: text({ label: 'Курсы повышения квалификации', ui: { displayMode: 'textarea' } }),
        additionalInfo: text({ label: 'О педагоге:', ui: { displayMode: 'textarea' } }),
        experience: text({ label: 'О педагоге' }),
        updateDate: timestamp({ label: 'Дата обновления информации о педагоге', defaultValue: { kind: 'now' } })
    }
}
