import styles from "./Projects.module.scss";
import Project from "@components/Project";

export default function Projects() {
  return (
    <>
      <div className="contentContainer" id="projects">
        <h2>what i've done</h2>
        <p>this is a small selection of projects that I'm proud of.</p>
        <div className={styles.grid}>
          <Project
            title="Programmieren mit der Maus"
            imgsrc="/world.png"
            type="Code"
            group="group"
            groupname="Hacking.Studio"
            gitsrc="https://programmieren.wdrmaus.de"
            websrc="https://programmieren.wdrmaus.de"
          />
          <Project
            title="Lotta Magazin Relaunch"
            imgsrc=""
            type="Code | Design"
            group="solo"
            websrc="https://programmieren.wdrmaus.de"
          />
          <Project
            title="Data Starter"
            imgsrc="/github.png"
            type="Code | Design Systems"
            group="group"
            groupname="Hacking.Studio"
            gitsrc="https://programmieren.wdrmaus.de"
          />
          <Project
            title="KalkSpace"
            imgsrc="/github.png"
            type="Community"
            group="group"
            groupname="KalkSpace e.V."
            websrc="https://kalk.space"
            gitsrc="https://programmieren.wdrmaus.de"
          />
          <Project
            title="FLINTA und Computer Kram"
            imgsrc="/github.png"
            type="Community"
            group="group"
            groupname="Tech Collective"
            websrc="https://fuckcologne.de"
          />
          <Project
            title="Collaboratory"
            imgsrc="/github.png"
            type="Code"
            group="group"
            groupname="Büro für Brauchbarkeit"
            websrc="https://fuckcologne.de"
          />
          <Project
            title="Videonale X"
            imgsrc="/github.png"
            type="Code"
            group="group"
            groupname="Büro für Brauchbarkeit"
            websrc="https://fuckcologne.de"
          />
        </div>
      </div>
    </>
  );
}
