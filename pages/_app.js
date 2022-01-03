import "../styles/globals.css";
import "../styles/mapbox.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        strategy="lazyOnload"
      />
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        strategy="lazyOnload"
      />
    </>
  );
}

export default MyApp;
