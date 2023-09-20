/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["picsum.photos"],
      },

    //  async redirects(){
    //     return  [
    //         {
    //             source: '/user',
    //             destination: '/',
    //             permanent: false
    //         }
    //     ]
    //  }
}

module.exports = nextConfig
