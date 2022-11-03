import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { trpc } from "../util/trpc";
import { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";
export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  // const getLayout =
  // Component.getLayout ?? ((page) => <Layout>{page}</Layout>); this line will uncommented for the ssr rendering in futuq
  return (
    <div className="h-[100vh] overflow-hidden bg-[#C7B2B2]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default trpc.withTRPC(MyApp);
