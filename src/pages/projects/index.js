import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";


const { Head } = require('@docusaurus/Head');

function Projects() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Projects" description={siteConfig.tagline}>
      <header className={styles.projectsHeader}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-rb6W21CQz0AmTjEEBhHOtA9u9Ux7+cCViCXcHEDBsu1RzQ0RETN7/XAYCCt+T72M+ZwO2bzM6aaZIYODewYD+A=="
          crossorigin="anonymous"
        />
        <h2 className="underlineColorSuccess">
          {/* <Translate id="projects.projectsMeTittle"/> */}
        </h2>
      </header>
      <main id="main">
          <div className={styles.projects}>
          {/* <div>
            <img className={styles.projectsProfilePic} src={AvatarImageUrl} />
          </div> */}
          <div className={styles.projectsText}>
            {/* <h2>
              <Translate id="projects.projectsMeHello"/>
            </h2> */}
            <p>Project</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Projects;
