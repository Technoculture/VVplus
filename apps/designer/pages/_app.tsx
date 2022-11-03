import "../styles/globals.css";
import Layout from "../components/Layout";

import { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="h-[100vh] overflow-hidden bg-white">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
