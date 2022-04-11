import "../styles/globals.css";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <GoogleAnalytics measurementId="G-12ETQSZR5W" />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
