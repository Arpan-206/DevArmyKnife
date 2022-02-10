import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dev Army Knife</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Dev Army Knife" />
        <meta
          name="description"
          content="Dev Army Knife is a tool to help you manage your dev environment."
        />
        <meta name="author" content="Arpan Pandey" />
      </Head>
      <Navbar />
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
