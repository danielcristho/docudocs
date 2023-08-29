import React from "react";
import Layout from "@theme/Layout";

import Translate, { translate } from "@docusaurus/Translate";

import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title={`Home`}>
        <div className={styles.minimaliStyle}>
          <p>Hi, my name is</p>
          <h1>Daniel Pepuho</h1>
          <p>
            I am a student who is passionate about networking
            and programming.
          </p>
          <br />
          <p>
          <a className="button button--secondary" href="/about">
            more...
          </a>{" "}
          <a className="button button--secondary" href="/blog">
            read blog
          </a>
          </p>
        </div>
    </Layout>
  );
}
