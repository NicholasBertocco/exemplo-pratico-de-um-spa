import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/componentes/Header/index";
import Footer from '@/componentes/Footer/index'

export default function Home() {
  return (
    <div className={styles.body}>
        <section className={styles.secao}>
          <div className={styles.container}>
            <h1>React</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores tempora velit suscipit neque, repudiandae voluptate impedit architecto, eveniet perferendis molestiae iste excepturi earum ab eaque placeat, corrupti possimus fugiat!</p>
          </div>
        </section>
    </div>
  );
}
