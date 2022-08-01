import { checkbox, integer, relationship, text, timestamp } from '@keystone-6/core/fields'
import { required, checked, unchecked, zeroByDefault, nonNegative } from '../util/fieldsOptions/kesytoneShorthands'
import { phoneValidation } from '../util/fieldsValidation/phoneValidation'
import { emailValidation } from '../util/fieldsValidation/emailValidation'
import { urlProtocolValidation } from '../util/fieldsValidation/urlProtocolValidation'
import { ogrnValidation } from '../util/fieldsValidation/ogrnValidation'
import { innValidation } from '../util/fieldsValidation/innValidation'
import { kppValidation } from '../util/fieldsValidation/kppValidation'
import { okopfValidation } from '../util/fieldsValidation/okopfValidation'
import { okfsValidation } from '../util/fieldsValidation/okfsValidation'

export const schoolModel = {
    fields: {
        schoolName: text({
            label: 'Полное наименование образовательной организации',
            ...required
        }),
        schoolNameAbbr: text({
            label: 'Сокращенное наименование образовательной организации'
        }),
        director: relationship({
            label: 'Директор',
            ref: 'Teacher',
            many: false
        }),
        address: text({
            label: 'Адрес ОО'
        }),
        website: text({
            label: 'URL-адрес сайта ОО',
            ...urlProtocolValidation
        }),
        email: text({
            label: 'Адрес электронной почты ОО',
            ...emailValidation
        }),
        phone: text({
            label: 'Номер телефона ОО',
            ...phoneValidation
        }),
        fax: text({
            label: 'Факс ОО',
            ...phoneValidation
        }),
        schedule: text({
            label: 'Режим и график работы ОО',
            ui: {
                displayMode: 'textarea'
            }
        }),
        OGRN: text({
            label: 'ОГРН',
            ...ogrnValidation
        }),
        INN: text({
            label: 'ИНН',
            ...innValidation
        }),
        INNStartDate: timestamp({
            label: 'Дата постановки организации на учет в налоговом органе'
        }),
        KPP: text({
            label: 'КПП',
            ...kppValidation
        }),
        OKOPF: text({
            label: 'Код по ОКОПФ (Общероссийский классификатор организационно-правовых форм)',
            ...okopfValidation
        }),
        OKFS: text({
            label: 'Код по ОКФС (Общероссийский классификатор форм собственности)',
            ...okfsValidation
        }),
        licenseRegNumber: integer({
            label: 'Регистрационный номер лицензии'
        }),
        licenseSerialNumber: text({
            label: 'Серия и номер бланка лицензии'
        }),
        licenseStartDate: timestamp({
            label: 'Дата выдачи лицензии'
        }),
        isLicensePermanent: checkbox({
            label: 'Лицензия выдана бессрочно:'
        }),
        licenseEndDate: timestamp({
            label: 'Cрок действия лицензии до:'
        }),
        accreditationRegNumber: text({
            label: 'Регистрационный номер свидетельства об аккредитации'
        }),
        accreditationSerialNumber: text({
            label: 'Серия и номер бланка свидетельства об аккредитации'
        }),
        accreditationStartDate: timestamp({
            label: 'Дата выдачи свидетельства об аккредитации'
        }),
        accreditationEndDate: timestamp({
            label: 'Окончание срока действия свидетельства об аккредитации'
        }),
        founder: text({
            label: 'Полное наименование учредителя образованой организации '
        }),
        founderAddress: text({
            label: 'Адрес учредителя'
        }),
        founderWebSite: text({
            label: 'URL-адрес сайта учредителя ',
            ...urlProtocolValidation
        }),
        founderEmail: text({
            label: 'Адрес электронной почты учредителя',
            ...emailValidation
        }),
        founderPhone: text({
            label: 'Номер телефона учредителя',
            ...phoneValidation
        }),

        // Pre School
        hasPreSchoolEducationLevel: checkbox({
            label: 'Уровень образования: дошкольное',
            ...unchecked
        }),
        numOfPreSchoolLevelPupils: integer({
            label: 'Количество обучающихся дошкольного уровня обучения',
            ...zeroByDefault,
            ...nonNegative
        }),
        hasPrimarySchoolEducationLevel: checkbox({
            label: 'Уровень образования: начальное общее',
            ...checked
        }),

        // Primary School
        numOfPrimarySchooLevelPupils: integer({
            label: 'Количество обучающихся начального уровня обучения (1–4 классы)',
            ...nonNegative
        }),
        gradeOneVacantPlaces: integer({
            label: 'Количество вакантных мест в первом классе ',
            ...zeroByDefault,
            ...nonNegative
        }),
        numOfFirstGrades: integer({
            label: 'Количество первых классов',
            ...nonNegative
        }),
        numOfSecondGrades: integer({
            label: 'Количество вторых классов',
            ...nonNegative
        }),
        numOfThirdGrades: integer({
            label: 'Количество третьих классов',
            ...nonNegative
        }),
        numOfFourthGrades: integer({
            label: 'Количество четвёртых классов',
            ...nonNegative
        }),

        // Basic General School
        hasBasicGeneralSchoolEducationLevel: checkbox({
            label: 'Уровень образования: основное общее',
            ...checked
        }),
        numOfBasicGeneralSchoolLevelPupils: integer({
            label: 'Количество обучающихся основного уровня обучения (5–9 классы)',
            ...nonNegative
        }),
        gradeFiveVacantPlaces: integer({
            label: 'Количество вакантных мест в пятом классе',
            ...zeroByDefault,
            ...nonNegative
        }),
        numOfFifthrades: integer({
            label: 'Количество пятых классов',
            ...nonNegative
        }),
        numOfSixthGrades: integer({
            label: 'Количество шестых классов',
            ...nonNegative
        }),
        numOfSeventhGrades: integer({
            label: 'Количество седьмых классов',
            ...nonNegative
        }),
        numOfEighthGrades: integer({
            label: 'Количество восьмых классов',
            ...nonNegative
        }),
        numOfNinethGrades: integer({
            label: 'Количество девятых классов',
            ...nonNegative
        }),

        // Secondary School
        hasSecondarySchoolEducationLevel: checkbox({
            label: 'Уровень образования: среднее общее',
            ...checked
        }),
        numOfSecondarySchoolLevelPupils: integer({
            label: 'Количество обучающихся старшего уровня обучения (10–11 классы)',
            ...nonNegative
        }),
        numOfTenthGrades: integer({
            label: 'Количество десятых классов',
            ...nonNegative
        }),
        numOfEleventhGrades: integer({
            label: 'Количество одиннадцатых классов',
            ...nonNegative
        })
    },
    ui: {
        label: 'Общие сведения',
        description: 'В этом разделе можно указать общие сведения об ОО'
    }
}
