const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com'],
    },
    distDir: 'build',
}

module.exports = nextConfig


