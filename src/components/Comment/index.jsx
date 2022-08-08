import styles from "./Comment.module.css";
import profile from "../../assets/foto.png";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src={profile} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="6 de Agosto às 09:19" dateTime="2022-08-06 09:19:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
