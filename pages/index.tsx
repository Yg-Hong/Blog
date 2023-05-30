import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aiden Hong</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Aiden Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          <li> 블로그 포스트</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
