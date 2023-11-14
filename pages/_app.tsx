import { Layout } from "@Components/Layout";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>NextJS Test App</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default App;
