import React from "react";
import { GiSwapBag, GiSwordSpade } from "react-icons/gi";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar(props) {
  //TODO add appropriate routing with next/router
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <Link href="/">
          <a>
            <h1>NextDex</h1>
          </a>
        </Link>
      </div>
      <nav className={styles.right}>
        {/* Quest Icon */}
        <div className={styles.button}>
          <GiSwordSpade />
          <h3>Quests</h3>
        </div>

        {/* Item Icon */}
        <div className={styles.button}>
          <GiSwapBag />
          <h3>Items</h3>
        </div>
      </nav>
    </div>
  );
}
