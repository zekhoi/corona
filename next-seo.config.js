export default {
  title: "Coronavirus - Khoironi Kurnia Syah",
  description:
    "Track the corona virus over the world. Find the detail every country about the virus now.",
  canonical: process.env.MYDOMAIN,
  noindex: false,
  openGraph: {
    url: process.env.MYDOMAIN,
    title: "Coronavirus - Khoironi Kurnia Syah",
    description:
      "Track the corona virus over the world. Find the detail every country about the virus now.",
    images: [
      {
        url: process.env.MYDOMAIN + "/images/corona-tracker.png",
        width: 1200,
        height: 630,
        alt: "Track the corona virus over the world.",
      },
    ],
    site_name: "Coronavirus",
  },
  twitter: {
    handle: "@zekhoi",
    site: "@zekhoi",
    cardType: "summary_large_image",
  },
};
