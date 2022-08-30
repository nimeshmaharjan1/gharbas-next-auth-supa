import "../styles/globals.scss";
import "../styles/nav.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
