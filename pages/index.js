import Head from "next/head";
import Footer from "@components/Footer";
import Projects from "@components/Projects";

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
            <li>
              <a href="#whoami">who am i?</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
        <div className="whoami contentContainer" id="whoami">
          <h2>who i am</h2>
          <p>i am a self-taught software developer living in cologne.</p>
          <p>
            i give a fuck about accessability, communities, css, equality,
            skillsharing, jamstack, drawing, 3-dimensional space, open source,
            feminism and so much more.
          </p>
        </div>
        <Projects />
      </main>

      <Footer />

      <style jsx>{`
        .hero {
          text-align: end;
          display: flex;
          align-items: center;
        }

        .hero h1 {
          text-transform: uppercase;
        }

        .navbar {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          border-top: 1px solid var(--color-main);
          border-bottom: 1px solid var(--color-main);
        }

        .navbar ul {
          list-style-type: none;
          display: flex;
        }

        .navbar ul li {
          margin-right: 2rem;
        }

        @media only screen and (min-width: 992px) {
          .hero {
            height: 90vh;
          }
        }
      `}</style>
    </div>
  );
}
