import { checkbox, integer, relationship, text, timestamp } from '@keystone-6/core/fields'

const opts = {
    nonNegative: {
        validation: {
            min: 0
        }
    },
    checked: {
        defaultValue: true
    },
    unchecked: {
        defaultValue: false
    },
    required: {
        validation: {
            isRequired: true
        }
    },
    zeroByDefault: {
        defaultValue: 0
    }
}

module.exports = {
    fields: {
        schoolName: text({ label: 'Полное наименование образовательной организации', ...opts.required }),
        schoolNameAbbr: text({ label: 'Сокращенное наименование образовательной организации' }),
        director: relationship({ label: 'Директор', ref: 'Teacher', many: false }),
        address: text({ label: 'Адрес ОО' }),
        website: text({ label: 'URL-адрес сайта ОО' }),
        email: text({ label: 'Адрес электронной почты ОО' }),
        phone: text({ label: 'Номер телефона ОО' }),
        fax: text({ label: 'Факс ОО' }),
        schedule: text({ label: 'Режим и график работы ОО', ui: { displayMode: 'textarea' } }),
        OGRN: integer({ label: 'ОГРН' }),
        INN: integer({ label: 'ИНН' }),
        INNStartDate: timestamp({ label: 'Дата постановки организации на учет в налоговом органе' }),
        KPP: integer({ label: 'КПП' }),
        OKOPF: text({ label: 'Код по ОКОПФ (Общероссийский классификатор организационно-правовых форм)' }),
        OKFS: text({ label: 'Код по ОКФС (Общероссийский классификатор форм собственности' }),
        licenseRegNumber: integer({ label: 'Регистрационный номер лицензии' }),
        licenseSerialNumber: text({ label: 'Серия и номер бланка лицензии ' }),
        licenseStartDate: timestamp({ label: 'Дата выдачи лицензии' }),
        isLicensePermanent: checkbox({ label: 'Лицензия выдана бессрочно:' }),
        licenseEndDate: timestamp({ label: 'Cрок действия лицензии до:' }),
        accreditationRegNumber: text({ label: 'Регистрационный номер свидетельства об аккредитации' }),
        accreditationSerialNumber: text({ label: 'Серия и номер бланка свидетельства об аккредитации' }),
        accreditationStartDate: timestamp({ label: 'Дата выдачи свидетельства об аккредитации' }),
        accreditationEndDate: timestamp({ label: 'Окончание срока действия свидетельства об аккредитации' }),
        founder: text({ label: 'Полное наименование учредителя образованой организации ' }),
        founderAddress: text({ label: 'Адрес учредителя' }),
        founderWebSite: text({ label: 'URL-адрес сайта учредителя ' }),
        founderEmail: text({ label: 'Адрес электронной почты учредителя' }),
        founderPhone: text({ label: 'Номер телефона учредителя' }),
        // * Pre School
        hasPreSchoolEducationLevel: checkbox({ label: 'Уровень образования: дошкольное', ...opts.unchecked }),
        numOfPreSchoolLevelPupils: integer({ label: 'Количество обучающихся дошкольного уровня обучения', ...opts.zeroByDefault, ...opts.nonNegative }),
        hasPrimarySchoolEducationLevel: checkbox({ label: 'Уровень образования: начальное общее', ...opts.checked }),
        // * Primary School
        numOfPrimarySchooLevelPupils: integer({ label: 'Количество обучающихся начального уровня обучения (1–4 классы)' }),
        gradeOneVacantPlaces: integer({ label: 'Количество вакантных мест в первом классе ', ...opts.zeroByDefault, ...opts.nonNegative }),
        numOfFirstGrades: integer({ label: 'Количество первых классов', ...opts.nonNegative }),
        numOfSecondGrades: integer({ label: 'Количество вторых классов', ...opts.nonNegative }),
        numOfThirdGrades: integer({ label: 'Количество третьих классов', ...opts.nonNegative }),
        numOfFourthGrades: integer({ label: 'Количество четвёртых классов', ...opts.nonNegative }),
        // * Basic General School
        hasBasicGeneralSchoolEducationLevel: checkbox({ label: 'Уровень образования: основное общее', ...opts.checked }),
        numOfBasicGeneralSchoolLevelPupils: integer({ label: 'Количество обучающихся основного уровня обучения (5–9 классы)' }),
        gradeFiveVacantPlaces: integer({ label: 'Количество вакантных мест в пятом классе', defaultValue: 0, ...opts.nonNegative }),
        numOfFifthrades: integer({ label: 'Количество пятых классов', ...opts.nonNegative }),
        numOfSixthGrades: integer({ label: 'Количество шестых классов', ...opts.nonNegative }),
        numOfSeventhGrades: integer({ label: 'Количество седьмых классов', ...opts.nonNegative }),
        numOfEighthGrades: integer({ label: 'Количество восьмых классов', ...opts.nonNegative }),
        numOfNenethGrades: integer({ label: 'Количество девятых классов', ...opts.nonNegative }),
        // * Secondary School
        hasSecondarySchoolEducationLevel: checkbox({ label: 'Уровень образования: среднее общее', ...opts.checked }),
        numOfSecondarySchoolLevelPupils: integer({ label: 'Количество обучающихся старшего уровня обучения (10–11 классы)', ...opts.nonNegative }),
        numOfTenthGrades: integer({ label: 'Количество десятых классов', ...opts.nonNegative }),
        numOfEleventhGrades: integer({ label: 'Количество одиннадцатых классов', ...opts.nonNegative })
        // vacantPlacesUpdateDate: timestamp()
    }
}
