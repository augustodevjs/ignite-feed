import styles from "./Post.module.css";
import profile from "../../assets/foto.png";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img width={120} className={styles.avatar} src={profile} />
          <div className={styles.authorInfo}>
            <strong>João Augusto</strong>
            <span>Front End Developer</span>
          </div>
        </div>

        <time title="11 de maio ás 08:30h" dateTime="2022-05-11 08:13:30">
          Publica há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href=""> jane.design/doctorcare</a>
        </p>

        <p>
          <a href=""> #novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
