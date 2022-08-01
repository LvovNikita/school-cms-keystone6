import { BaseListTypeInfo } from '@keystone-6/core/types'
import { DocumentFieldConfig } from '@keystone-6/fields-document'

export const wysiwygOptions: DocumentFieldConfig<BaseListTypeInfo> = {
    formatting: true,
    dividers: true,
    links: true,
    layouts: [
        [1, 1]
    ]
}
