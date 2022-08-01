import { StorageConfig } from '@keystone-6/core/types'

export const localFiles: StorageConfig = {
    kind: 'local',
    type: 'file',
    generateUrl: path => `http://localhost:3000/files${path}`,
    serverRoute: {
        path: '/files'
    },
    storagePath: 'public/files'
}

export const localImages: StorageConfig = {
    kind: 'local',
    type: 'image',
    generateUrl: path => `http://localhost:3000/images${path}`,
    serverRoute: {
        path: '/images'
    },
    storagePath: 'public/images'
}
