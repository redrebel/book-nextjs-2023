/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader 속성을 지정하면 외부 서비스를 통한 자동 이미지 최적화
    //loader: 'akamai',

    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig
