import Head from "next/head";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio | Christine Gotthardt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar home="false" />
        <h2>Datenschutz</h2>
      </main>

      <Footer />
    </div>
  );
}
