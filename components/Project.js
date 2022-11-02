import styles from "./Project.module.scss";

export default function Project({ title, imgsrc, links }) {
  return (
    <>
      <div className={styles.project}>
        <img src={imgsrc} alt={title} />
        <span>Code</span>
        <h3>{title}</h3>
        <a href="">
          <img styles={styles.icon} src="public/github.png" />
          Git
        </a>
        <a href="">
          <img styles={styles.icon} src="public/world.png" />
          Web
        </a>
      </div>
    </>
  );
}
