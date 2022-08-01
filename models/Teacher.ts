import { text, select, timestamp, integer } from '@keystone-6/core/fields'
import { required, zeroByDefault, nonNegative } from '../util/fieldsOptions/kesytoneShorthands'
import { emailValidation } from '../util/fieldsValidation/emailValidation'
import { phoneValidation } from '../util/fieldsValidation/phoneValidation'
import { AcademicTitles, Categories, Degrees, EducationLevels, Positions } from '../util/enums'

const segmentedEnum = (enumArr): { type, options, ui } => {
    return {
        type: 'enum',
        options: enumArr,
        ui: { displayMode: 'segmented-control' }
    }
}

export const teacherModel = {
    label: 'Учитель',
    fields: {
        firstname: text({
            label: 'Имя',
            ...required
        }),
        lastname: text({
            label: 'Фамилия',
            ...required
        }),
        middlename: text({
            label: 'Отчество'
        }),
        dateOfBirth: timestamp({
            label: 'Дата рождения'
        }),
        position: select({
            label: 'Должность',
            ...segmentedEnum(Positions)
        }),
        subjects: text({
            label: 'Преподаваемые предметы'
        }),
        email: text({
            label: 'Адрес электронной почты',
            ...emailValidation
        }),
        phone: text({
            label: 'Номер телефона',
            ...phoneValidation
        }),
        category: select({
            label: 'Квалификационная категория',
            ...segmentedEnum(Categories)
        }),
        education: text({
            label: 'Образование (место учёбы)'
        }),
        educationLevel: select({
            label: 'Уровень образования',
            ...segmentedEnum(EducationLevels)
        }),
        degree: select({
            label: 'Учёная степень',
            ...segmentedEnum(Degrees)
        }),
        academicTitle: select({
            label: 'Учёное звание',
            ...segmentedEnum(AcademicTitles)
        }),
        totalYearsExperience: integer({
            label: 'Общий трудовой стаж',
            ...zeroByDefault,
            ...nonNegative
        }),
        teachingExperienceYears: integer({
            label: 'Педагогический стаж',
            ...zeroByDefault,
            ...nonNegative
        }),
        worksSinceDate: timestamp({
            label: 'Работает в данном учреждении с:'
        }),
        trainings: text({
            label: 'Курсы повышения квалификации',
            ui: {
                displayMode: 'textarea'
            }
        }),
        additionalInfo: text({
            label: 'О педагоге:',
            ui: {
                displayMode: 'textarea'
            }
        }),
        experience: text({
            label: 'О педагоге'
        }),
        updateDate: timestamp({
            label: 'Дата обновления информации о педагоге',
            defaultValue: {
                kind: 'now'
            }
        })
    },
    ui: {
        label: 'Учителя',
        description: 'В этом разделе можно добавить учителей. Добавить предметы можно в разделе Subject'
    }
}
