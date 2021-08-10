module.exports = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        "@semantic-release/npm",
        ["@semantic-release/git", {
            "assets": ["./bin/gotthard.vsix", "docs", "package.json", "CHANGELOG.md"],
            "message": "chore(release): version ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }]
    ],
    preset: 'angular',
}
