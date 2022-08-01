import { text, image } from '@keystone-6/core/fields'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const bannerModel = {
    fields: {
        title: text({
            label: 'Название',
            ...required
        }),
        href: text({
            label: 'Ссылка для перехода'
        }),
        file: image({
            label: 'Файл баннера',
            storage: 'localImages'
        })
    }
}
