import styles from "./Projects.module.scss";
import Project from "@components/Project";

export default function Projects() {
  return (
    <>
      <div className={styles.contentContainer} id="projects">
        <h2>what i've done</h2>
        <p>this is a small selection of projects that I'm proud of.</p>
        <div className={styles.grid}>
          <Project
            title="Programmieren mit der Maus"
            imgsrc="src"
            links={{ style: "git", target: "https://programmieren.wdrmaus.de" }}
          />
          <div className={styles.project}>
            <img alt="alt" />
            <span>Code</span>
            <h3>Lotta Magazin Relaunch</h3>
            <a href="">
              <img styles={styles.icon} src="public/github.png" />
              Git
            </a>
            <a href="">
              <img styles={styles.icon} src="public/world.png" />
              Web
            </a>
          </div>
          <div className={styles.project}>
            <img alt="alt" />
            <span>Code</span>
            <h3>Data Starter</h3>
            <a href="">
              <img styles={styles.icon} src="public/github.png" />
              Git
            </a>
            <a href="">
              <img styles={styles.icon} src="public/world.png" />
              Web
            </a>
          </div>
          <div className={styles.project}>
            <img alt="alt" />
            <span>Community</span>
            <h3>KalkSpace</h3>
            <a href="">
              <img styles={styles.icon} src="public/github.png" />
              Git
            </a>
            <a href="">
              <img styles={styles.icon} src="public/world.png" />
              Web
            </a>
          </div>
          <div className={styles.project}>
            <img alt="alt" />
            <span>Community</span>
            <h3>FLINTA und Computer Kram (fuck)</h3>
            <a href="">
              <img styles={styles.icon} src="public/github.png" />
              Git
            </a>
            <a href="">
              <img styles={styles.icon} src="public/world.png" />
              Web
            </a>
          </div>
          <div className={styles.project}>
            <img alt="alt" />
            <span>Code</span>
            <h3>Collaboratory</h3>
            <a href="">
              <img styles={styles.icon} src="public/github.png" />
              Git
            </a>
            <a href="">
              <img styles={styles.icon} src="public/world.png" />
              Web
            </a>
          </div>
          <div className={styles.project}>
            <img alt="alt" />
            <span>Code</span>
            <h3>Videonale X</h3>
            <a href="">
              <img styles={styles.icon} src="public/github.png" />
              Git
            </a>
            <a href="">
              <img styles={styles.icon} src="public/world.png" />
              Web
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
