import "../styles/globals.css";
import Layout from "../components/Layout";

import { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <div className="h-screen overflow-hidden bg-white">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
