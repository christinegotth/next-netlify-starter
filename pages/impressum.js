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
        <h2>Impressum</h2>
        <h3>Anbieterin: </h3>
        <p>
          Christine Gotthardt
          <br />
          KalkSpace e.V.
          <br />
          Olpener Str. 33
          <br />
          51103 Köln
        </p>
        <h3>Kontakt: </h3>
        <p>Telefon: 0221-98653919 </p>
        <p>Bei redaktionellen Inhalten: Verantwortlich nach § 55 Abs.2 RStV</p>
        <p>
          Christine Gotthardt
          <br />
          KalkSpace e.V.
          <br />
          Olpener Str. 33
          <br />
          51103 Köln
        </p>
      </main>

      <Footer />
    </div>
  );
}
