import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { AppType } from "next/dist/shared/lib/utils";
import type { ReactElement, ReactNode } from "react";
import { trpc } from "../util/trpc";

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
  //   Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return <Component {...pageProps} />;
}) as AppType;

export default trpc.withTRPC(MyApp);
