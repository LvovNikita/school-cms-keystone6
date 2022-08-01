module.exports = {
    localFiles: {
        kind: 'local',
        type: 'file',
        generateUrl: path => `http://localhost:3000/files${path}`,
        serverRoute: {
            path: '/files'
        },
        storagePath: 'public/files'
    },
    localImages: {
        kind: 'local',
        type: 'image',
        generateUrl: path => `http://localhost:3000/images${path}`,
        serverRoute: {
            path: '/images'
        },
        storagePath: 'public/images'
    }
}
