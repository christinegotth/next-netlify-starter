import styles from "./Projects.module.scss";
import Project from "@components/Project";

export default function Projects() {
  return (
    <>
      <div className="contentContainer" id="projects">
        <h2>what i've done</h2>
        <p>this is a small selection of projects that i've done so far.</p>
        <p>more to come.</p>
        <div className={styles.grid}>
          <Project
            title="Programmieren mit der Maus"
            imgsrc="/maus.jpeg"
            type="Code"
            group="group"
            groupname="WDR Hacking.Studio"
            gitsrc="https://github.com/wdr-data/code4maus"
            websrc="https://programmieren.wdrmaus.de"
          />
          <Project
            title="Lotta Magazin Relaunch"
            imgsrc=""
            type="Code | Design"
            group="solo"
            websrc="https://www.lotta-magazin.de/"
          />
          <Project
            title="Data Starter"
            imgsrc="/github.png"
            type="Code | Design Systems"
            group="group"
            groupname="WDR Hacking.Studio"
            gitsrc="https://github.com/wdr-data/starter"
          />
          <Project
            title="KalkSpace"
            imgsrc="/kalkspace.png"
            type="Community | Code | Design"
            group="group"
            groupname="KalkSpace e.V."
            websrc="https://kalk.space"
            gitsrc="https://github.com/kalkspace"
          />
          <Project
            title="FLINTA und Computer Kram"
            imgsrc="/fuck.png"
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
            websrc="https://collaboratory-lenbachhaus.de/de"
          />
          <Project
            title="Videonale X"
            imgsrc="/github.png"
            type="Code"
            group="group"
            groupname="Büro für Brauchbarkeit"
            websrc="https://x.videonale.org"
          />
        </div>
      </div>
    </>
  );
}
