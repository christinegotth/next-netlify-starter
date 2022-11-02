import Head from "next/head";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio | Christine Gotthardt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="hero">
          <h1>I give a fuck, do you?</h1>
        </div>
        <div className="navbar">
          <ul>
            <li>who am i?</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="whoami">
          <p>I build web apps, communities and zines.</p>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .hero {
          text-align: end;
        }

        .hero h1 {
          text-transform: uppercase;
        }

        .navbar {
          width: 100%;
          display: flex;
          border-top: 1px solid var(--color-main);
          border-bottom: 1px solid var(--color-main);
        }

        .navbar ul {
          list-style-type: none;
          display: flex;
        }

        .navbar ul li {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
