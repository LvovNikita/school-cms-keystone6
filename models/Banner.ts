import { ListConfig } from '@keystone-6/core'
import { text, image } from '@keystone-6/core/fields'
import { BaseListTypeInfo } from '@keystone-6/core/types'
import { required } from '../util/fieldsOptions/kesytoneShorthands'

export const bannerModel: ListConfig<BaseListTypeInfo, any> = {
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
    },
    ui: {
        label: 'Баннеры',
        description: 'В этом разделе можно добавить баннер'
    }
}
