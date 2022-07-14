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

const opts = {
    schoolName: {
        label: 'Полное наименование образовательной организации',
        ...required
    },
    schoolNameAbbr: {
        label: 'Сокращенное наименование образовательной организации'
    },
    director: {
        label: 'Директор',
        ref: 'Teacher',
        many: false
    },
    address: {
        label: 'Адрес ОО'
    },
    website: {
        label: 'URL-адрес сайта ОО',
        ...urlProtocolValidation
    },
    email: {
        label: 'Адрес электронной почты ОО',
        ...emailValidation
    },
    phone: {
        label: 'Номер телефона ОО',
        ...phoneValidation
    },
    fax: {
        label: 'Факс ОО',
        ...phoneValidation
    },
    schedule: {
        label: 'Режим и график работы ОО'
    },
    OGRN: {
        label: 'ОГРН',
        ...ogrnValidation
    },
    INN: {
        label: 'ИНН',
        ...innValidation
    },
    INNStartDate: {
        label: 'Дата постановки организации на учет в налоговом органе'
    },
    KPP: {
        label: 'КПП',
        ...kppValidation
    },
    OKOPF: {
        label: 'Код по ОКОПФ (Общероссийский классификатор организационно-правовых форм)',
        ...okopfValidation
    },
    OKFS: {
        label: 'Код по ОКФС (Общероссийский классификатор форм собственности)',
        ...okfsValidation
    },
    licenseRegNumber: {
        label: 'Регистрационный номер лицензии'
    },
    licenseSerialNumber: {
        label: 'Серия и номер бланка лицензии'
    },
    licenseStartDate: {
        label: 'Дата выдачи лицензии'
    },
    isLicensePermanent: {
        label: 'Лицензия выдана бессрочно:'
    },
    licenseEndDate: {
        label: 'Cрок действия лицензии до:'
    },
    accreditationRegNumber: {
        label: 'Регистрационный номер свидетельства об аккредитации'
    },
    accreditationSerialNumber: {
        label: 'Серия и номер бланка свидетельства об аккредитации'
    },
    accreditationStartDate: {
        label: 'Дата выдачи свидетельства об аккредитации'
    },
    accreditationEndDate: {
        label: 'Окончание срока действия свидетельства об аккредитации'
    },
    founder: {
        label: 'Полное наименование учредителя образованой организации '
    },
    founderAddress: {
        label: 'Адрес учредителя'
    },
    founderWebSite: {
        label: 'URL-адрес сайта учредителя ',
        ...urlProtocolValidation
    },
    founderEmail: {
        label: 'Адрес электронной почты учредителя',
        ...emailValidation
    },
    founderPhone: {
        label: 'Номер телефона учредителя',
        ...phoneValidation
    },
    // * Pre School
    hasPreSchoolEducationLevel: {
        label: 'Уровень образования: дошкольное',
        ...unchecked
    },
    numOfPreSchoolLevelPupils: {
        label: 'Количество обучающихся дошкольного уровня обучения',
        ...zeroByDefault,
        ...nonNegative
    },
    hasPrimarySchoolEducationLevel: {
        label: 'Уровень образования: начальное общее',
        ...checked
    },
    // * Primary School
    numOfPrimarySchooLevelPupils: {
        label: 'Количество обучающихся начального уровня обучения (1–4 классы)',
        ...nonNegative
    },
    gradeOneVacantPlaces: {
        label: 'Количество вакантных мест в первом классе ',
        ...zeroByDefault,
        ...nonNegative
    },
    numOfFirstGrades: {
        label: 'Количество первых классов',
        ...nonNegative
    },
    numOfSecondGrades: {
        label: 'Количество вторых классов',
        ...nonNegative
    },
    numOfThirdGrades: {
        label: 'Количество третьих классов',
        ...nonNegative
    },
    numOfFourthGrades: {
        label: 'Количество четвёртых классов',
        ...nonNegative
    },
    // * Basic General School
    hasBasicGeneralSchoolEducationLevel: {
        label: 'Уровень образования: основное общее',
        ...checked
    },
    numOfBasicGeneralSchoolLevelPupils: {
        label: 'Количество обучающихся основного уровня обучения (5–9 классы)',
        ...nonNegative
    },
    gradeFiveVacantPlaces: {
        label: 'Количество вакантных мест в пятом классе',
        ...zeroByDefault,
        ...nonNegative
    },
    numOfFifthrades: {
        label: 'Количество пятых классов',
        ...nonNegative
    },
    numOfSixthGrades: {
        label: 'Количество шестых классов',
        ...nonNegative
    },
    numOfSeventhGrades: {
        label: 'Количество седьмых классов',
        ...nonNegative
    },
    numOfEighthGrades: {
        label: 'Количество восьмых классов',
        ...nonNegative
    },
    numOfNinethGrades: {
        label: 'Количество девятых классов',
        ...nonNegative
    },
    // * Secondary School
    hasSecondarySchoolEducationLevel: {
        label: 'Уровень образования: среднее общее',
        ...checked
    },
    numOfSecondarySchoolLevelPupils: {
        label: 'Количество обучающихся старшего уровня обучения (10–11 классы)',
        ...nonNegative
    },
    numOfTenthGrades: {
        label: 'Количество десятых классов',
        ...nonNegative
    },
    numOfEleventhGrades: {
        label: 'Количество одиннадцатых классов',
        ...nonNegative
    }
}

module.exports = {
    fields: {
        schoolName: text(opts.schoolName),
        schoolNameAbbr: text(opts.schoolNameAbbr),
        director: relationship(opts.director),
        address: text(opts.address),
        website: text(opts.website),
        email: text(opts.email),
        phone: text(opts.phone),
        fax: text(opts.fax),
        schedule: text({ ...opts.schedule, ui: { displayMode: 'textarea' } }),
        OGRN: text(opts.OGRN),
        INN: text(opts.INN),
        INNStartDate: timestamp(opts.INNStartDate),
        KPP: text(opts.KPP),
        OKOPF: text(opts.OKOPF),
        OKFS: text(opts.OKFS),
        licenseRegNumber: integer(opts.licenseRegNumber),
        licenseSerialNumber: text(opts.licenseSerialNumber),
        licenseStartDate: timestamp(opts.licenseStartDate),
        isLicensePermanent: checkbox(opts.isLicensePermanent),
        licenseEndDate: timestamp(opts.licenseEndDate),
        accreditationRegNumber: text(opts.accreditationRegNumber),
        accreditationSerialNumber: text(opts.accreditationSerialNumber),
        accreditationStartDate: timestamp(opts.accreditationStartDate),
        accreditationEndDate: timestamp(opts.accreditationEndDate),
        founder: text(opts.founder),
        founderAddress: text(opts.founderAddress),
        founderWebSite: text(opts.founderWebSite),
        founderEmail: text(opts.founderEmail),
        founderPhone: text(opts.founderPhone),
        // * Pre School
        hasPreSchoolEducationLevel: checkbox(opts.hasPreSchoolEducationLevel),
        numOfPreSchoolLevelPupils: integer(opts.numOfPreSchoolLevelPupils),
        hasPrimarySchoolEducationLevel: checkbox(opts.hasPrimarySchoolEducationLevel),
        // * Primary School
        numOfPrimarySchooLevelPupils: integer(opts.numOfPrimarySchooLevelPupils),
        gradeOneVacantPlaces: integer(opts.gradeOneVacantPlaces),
        numOfFirstGrades: integer(opts.numOfFirstGrades),
        numOfSecondGrades: integer(opts.numOfSecondGrades),
        numOfThirdGrades: integer(opts.numOfThirdGrades),
        numOfFourthGrades: integer(opts.numOfFourthGrades),
        // * Basic General School
        hasBasicGeneralSchoolEducationLevel: checkbox(opts.hasBasicGeneralSchoolEducationLevel),
        numOfBasicGeneralSchoolLevelPupils: integer(opts.numOfBasicGeneralSchoolLevelPupils),
        gradeFiveVacantPlaces: integer(opts.gradeFiveVacantPlaces),
        numOfFifthrades: integer(opts.numOfFifthrades),
        numOfSixthGrades: integer(opts.numOfSixthGrades),
        numOfSeventhGrades: integer(opts.numOfSeventhGrades),
        numOfEighthGrades: integer(opts.numOfEighthGrades),
        numOfNinethGrades: integer(opts.numOfNinethGrades),
        // * Secondary School
        hasSecondarySchoolEducationLevel: checkbox(opts.hasSecondarySchoolEducationLevel),
        numOfSecondarySchoolLevelPupils: integer(opts.numOfSecondarySchoolLevelPupils),
        numOfTenthGrades: integer(opts.numOfTenthGrades),
        numOfEleventhGrades: integer(opts.numOfEleventhGrades)
    }
}
