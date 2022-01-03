module.exports = {
  reactStrictMode: true,
  env: {
    HOSTNAME: process.env.HOSTNAME,
    COVIDAPI: process.env.COVIDAPI,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  },
  images: {
    domains: ["disease.sh"],
  },
};
