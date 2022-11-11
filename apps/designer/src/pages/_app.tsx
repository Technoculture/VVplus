import "../styles/globals.css";
import Layout from "../components/Layout";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { trpc } from "../util/trpc";
import { AppType } from "next/dist/shared/lib/utils";

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  // const getLayout =
  //   Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <div className="h-[100vh] overflow-hidden bg-[#C7B2B2]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}) as AppType;

export default trpc.withTRPC(MyApp);
