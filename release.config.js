module.exports = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        "@semantic-release/npm",
        ["@semantic-release/github", {
            "assets": [
                { path: "./bin/gotthard.vsix", label: "Gotthard Bundle" },
                { path: "package.json", label: "Package Definition" }, 
                { path: "CHANGELOG.md", label: "Changelog" }
            ]
        }]
    ],
    preset: 'angular',
}
