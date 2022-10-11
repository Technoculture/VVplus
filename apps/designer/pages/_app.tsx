import "../styles/globals.css";
import Layout from "../components/Layout";
//import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
//import type { NextComponentType } from "next";

// const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
//   Component,
//   pageProps,
// }: AppLayoutProps) => {
//   return (
//     <>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//   );
// };
import getBaseUrl from "get-base-url";
import { AppProps } from "next/app";
import { withTRPC } from "@trpc/next";
import { httpBatchLink, loggerLink } from "@trpc/client";
// export default MyApp;
import type { AppRouter } from "../server/routers/_app";
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className="h-[100vh] overflow-hidden bg-[#C7B2B2]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

//exporting the Myapp with the trpc config expects some inputs from the context api

export default withTRPC<AppRouter>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config() {
    const url = `${getBaseUrl()}/api/trpc`;
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            // eslint-disable-next-line turbo/no-undeclared-env-vars
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url,
        }),
      ],
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 6000 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  /**
   * Set headers or status code when doing SSR
   */
  responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      // propagate http first error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }

    // for app caching with SSR see https://trpc.io/docs/caching

    return {};
  },
})(MyApp);
