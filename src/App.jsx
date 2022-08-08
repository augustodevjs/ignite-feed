import { Header, Sidebar } from "./components/index";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>Posts</main>
      </div>
    </>
  );
}
