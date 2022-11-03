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
          Am Kohlenkämpchen 20
          <br />
          45133 Essen
        </p>
        <h3>Kontakt: </h3>
        <p>Mail: christinegotth [ @ ] posteo . de</p>
        <p>Bei redaktionellen Inhalten: Verantwortlich nach § 55 Abs.2 RStV</p>
        <p>
          Christine Gotthardt
          <br />
          Am Kohlenkämpchen 20
          <br />
          45133 Essen
        </p>
      </main>

      <Footer />
    </div>
  );
}
