import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";
import { ScriptProps } from "next/script";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

const Layout: React.FC<ScriptProps> = ({ children }) => {
  // TODO: improve this type later
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        {children}
        <Footer />
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default Layout;
