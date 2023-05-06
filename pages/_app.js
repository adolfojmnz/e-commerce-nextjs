import Head from 'next/head'
import Navbar from '../app/elements/Navbar';
import Footer from '../app/elements/Footer';
import 'bootstrap/dist/css/bootstrap.css'
import '../app/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}