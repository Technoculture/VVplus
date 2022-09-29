import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
      <>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </>
    );
  }