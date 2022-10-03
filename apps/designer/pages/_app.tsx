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
import { AppProps } from "next/app";
// export default MyApp;
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="h-[100vh] overflow-hidden bg-[#C7B2B2]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
