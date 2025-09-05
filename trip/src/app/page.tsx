import Image from "next/image";
import styles from "./page.module.css";
import Header from "../component/header/header";

export default function Home() {
  return (
    <div className={styles.page}>   
     <Header />
      <main className={styles.main}>
        test
      </main>
    </div>
  );
}
