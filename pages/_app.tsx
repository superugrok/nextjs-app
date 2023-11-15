import { Layout } from "@Components/Layout";
import { Loading } from "@Components/Loading";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  // Loading state
  React.useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(true));
    router.events.on("routeChangeStart", (e) => setLoading(true));
    router.events.on("routeChangeComplete", (e) => setLoading(false));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(true));
      router.events.off("routeChangeStart", (e) => setLoading(true));
      router.events.off("routeChangeComplete", (e) => setLoading(false));
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <title>NextJS Test App</title>
      </Head>
      <main>{loading ? <Loading /> : <Component {...pageProps} />}</main>
    </Layout>
  );
};

export default App;
