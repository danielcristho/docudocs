import React from "react";
import Layout from "@theme/Layout";
import ProjectImage from "@site/static/img/me.jpg";
import styles from "./styles.module.css";
import { Translate } from "@docusaurus/Translate";

function Projects() {
  return (
    <Layout title="Projects" description="Explore My Projects">
      <header className={styles.projectHeader}>
        <h2 className="underlineColorSuccess">
          <Translate id="project.projectsTitle" />
        </h2>
      </header>
      <main id="main">
        <div className={styles.projects}>
          <div>
            <img className={styles.projectImage} src={ProjectImage} alt="Project" />
          </div>
          <div className={styles.projectText}>
            <h2>
              <Translate id="project.projectName" />
            </h2>
            <p>
              <Translate id="project.projectDescription" />
            </p>
            <p>
              <Translate id="project.projectDetails" />
            </p>
            <p>
              <Translate id="project.contactInfo" />
            </p>
            <p>
              <Translate id="project.thanks" />
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Projects;
