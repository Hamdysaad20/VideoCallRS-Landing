/** @type {import('next').NextConfig} */
const nextConfig = {
    withGithub: {
        enabled: true,
        githubRepo: 'username/repo-name',
        githubBranch: 'main',
    },
    images: {
        domains: ['github.com'],
    },
}

module.exports = nextConfig
