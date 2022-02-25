import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dev Army Knife</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Dev Army Knife" />
        <meta
          name="description"
          content="Introducing the Dev Army Knife, a toolkit for developers to do various tasks. It may be creating QRCodes or editing code, we've got your back!"
        />
        <meta name="author" content="Arpan Pandey" />
        <link rel="icon" href="/favicon.ico" />
        <title>Dev Army Knife</title>
        <meta
          name="description"
          content="Introducing the Dev Army Knife, a toolkit for developers to do various tasks. It may be creating QRCodes or editing code, we've got your back!"
        />

        <meta
          property="og:url"
          content="https://devarmyknife.hackersreboot.tech/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dev Army Knife" />
        <meta
          property="og:description"
          content="Introducing the Dev Army Knife, a toolkit for developers to do various tasks. It may be creating QRCodes or editing code, we've got your back!"
        />
        <meta
          property="og:image"
          content="https://devarmyknife.hackersreboot.tech/images/DevArmyKnifeHeader.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="devarmyknife.hackersreboot.tech"
        />
        <meta
          property="twitter:url"
          content="https://devarmyknife.hackersreboot.tech/"
        />
        <meta name="twitter:title" content="Dev Army Knife" />
        <meta
          name="twitter:description"
          content="Introducing the Dev Army Knife, a toolkit for developers to do various tasks. It may be creating QRCodes or editing code, we've got your back!"
        />
        <meta
          name="twitter:image"
          content="https://devarmyknife.hackersreboot.tech/images/DevArmyKnifeHeader.png"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="DevArmyKnife" />
        <meta name="apple-mobile-web-app-title" content="DevArmyKnife" />
        <meta name="theme-color" content="#ff8906" />
        <meta name="msapplication-navbutton-color" content="#ff8906" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="icon" type="image/svg" sizes="192x192" href="/logo.svg" />
        <link
          rel="apple-touch-icon"
          type="image/svg"
          sizes="192x192"
          href="/logo.svg"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      
      <Script async data-website-id="cf7f8af1-4b3a-4d9e-8c35-9441ea739859" src="https://umami-hrbt.herokuapp.com/umami.js"/>
    </>
  );
}

export default MyApp;
