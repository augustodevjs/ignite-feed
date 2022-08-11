import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import profile from "../../assets/foto.png";
import { Avatar } from "../index";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />

      <div className={styles.profile}>
        <Avatar src={profile} />
        <strong>João Augusto</strong>
        <span>Front End Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
