/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"]
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    }
}

module.exports = nextConfig
