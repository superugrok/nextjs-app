import { Layout } from "@Components/Layout";
import "@Assets/styles/layout.scss";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default App;
