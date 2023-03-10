import "@/styles/globals.css";
import Layout from "@/components/layout";
import localFont from "@next/font/local";
import { AnimatePresence } from "framer-motion";

const gloock = localFont({
  src: [
    {
      path: "../public/fonts/Gloock-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-gloock",
});

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Layout>
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <main className={`${gloock.variable} font-sans`}>
            <Component {...pageProps} key={router.asPath} />
          </main>
        </AnimatePresence>
      </Layout>
    </>
  );
}
