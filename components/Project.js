import styles from "./Project.module.scss";
import fallbackImg from "../public/github.png";

export default function Project({
  title,
  imgsrc,
  type,
  gitsrc,
  websrc,
  group,
  groupname,
}) {
  return (
    <>
      <div className={styles.project}>
        <img src={imgsrc ? imgsrc : fallbackImg} alt={title} />
        {type && <span>{type}</span>}
        <h3>{title}</h3>
        <div className={styles.links}>
          {gitsrc && (
            <a href={gitsrc}>
              <img className={styles.icon} src="/github.png" />
            </a>
          )}
          {websrc && (
            <a href={websrc}>
              <img className={styles.icon} src="/world.png" />
            </a>
          )}
          {group == "group" && (
            <img className={styles.icon} src="/group.png" title={groupname} />
          )}
          {group == "solo" && (
            <img className={styles.icon} src="/solo.png" title="Solo-working" />
          )}
        </div>
      </div>
    </>
  );
}
