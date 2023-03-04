import "@/styles/globals.css";
import Layout from "@/components/layout";
import localFont from '@next/font/local'

const gloock = localFont({
  src: [
    {
      path: '../public/fonts/Gloock-Regular.ttf',
      weight: '400'
    },
  ],
  variable: '--font-gloock'
});

export default function App({ Component, pageProps }) { 
  return (
    <>
      <Layout>
        <main className={`${gloock.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
