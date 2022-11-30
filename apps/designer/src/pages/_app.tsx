import "../styles/globals.css";
import Layout from "../components/Layout";

import { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <div className="h-[100vh] overflow-hidden bg-[#C7B2B2]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
