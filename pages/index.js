import Head from "next/head";
import Footer from "@components/Footer";
import Projects from "@components/Projects";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio | Christine Gotthardt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Navbar />
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
    </div>
  );
}
