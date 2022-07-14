module.exports = {
    local_files: {
        kind: 'local',
        type: 'file',
        generateUrl: path => `http://localhost:3000/files${path}`,
        serverRoute: {
            path: '/files'
        },
        storagePath: 'public/files'
    }
}
