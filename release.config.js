module.exports = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/github',
            {
                assets: ['./bin/gotthard.vsix'],
            },
        ],
        '@semantic-release/git',
    ],
    preset: 'angular',
}
