import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dev Army Knife</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Dev Army Knife" />
        <meta
          name="description"
          content="Introducing the Dev Army Knife, a toolkit for developers to do various tasks. Whether it may be generating a QR code, editing a few lines of code without the editor or joining two words without any delays and with high-quality, the Dev Army Knife is here to help you. Inspired by the Swiss Army Knife, this handy toolkit includes many useful tools for developers to use in day-to-day tasks."
        />
        <meta name="author" content="Arpan Pandey" />
        <meta property="og:title" content="Dev Army Knife" />
        <meta
          property="og:description"
          content="Introducing the Dev Army Knife, a toolkit for developers to do various tasks. Whether it may be generating a QR code, editing a few lines of code without the editor or joining two words without any delays and with high-quality, the Dev Army Knife is here to help you. Inspired by the Swiss Army Knife, this handy toolkit includes many useful tools for developers to use in day-to-day tasks."
        />
        <meta property="og:type" content="Applicaton, Dev Tools" />
        <meta
          property="og:url"
          content="https://devarmyknife.hackersreboot.tech/"
        />
        <meta property="og:image" content="images/DevArmyKnifeHeader.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} /> <Footer />
    </>
  );
}

export default MyApp;
