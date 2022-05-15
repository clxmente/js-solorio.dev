/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/clxmente",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/clementesolorio/",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/clxmente/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/clxmente",
        permanent: true,
      },
    ];
  },
};
