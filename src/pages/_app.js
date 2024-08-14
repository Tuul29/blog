import "@/styles/globals.css";
import Layout from "@/components/layout";
import MyProvider from "@/provider/provider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyProvider>
    </>
  );
}
