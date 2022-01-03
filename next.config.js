module.exports = {
  reactStrictMode: true,
  env: {
    COVIDAPI: process.env.COVIDAPI,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  },
  images: {
    domains: ["disease.sh"],
  },
};
