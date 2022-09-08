import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  return (
    <div className="h-full bg-pink-200 ">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
