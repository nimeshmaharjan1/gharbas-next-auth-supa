import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
