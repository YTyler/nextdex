import Head from "next/head";
import styles from "../../styles/Quests.module.css";

export default function Quests() {
  return (
    <div>
      <Head>
        <title>Nextdex</title>
        <meta name="description" content="quests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.quest}>
        <section>
          <h2>quest name</h2>

          <h3>game title</h3>
        </section>
        <section>
          <h3>Items Needed:</h3>
          <h3>Notes</h3>
        </section>
      </div>
    </div>
  );
}
