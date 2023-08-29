import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

const Project = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const projectDetails = [
    {
      title: "PPDB Jatim 2023",
      description: "This is a project for the admission of new students to high schools (SMA/SMK) in East Java. My task is to be an IT infrastructure for the website.",
      tags: ["docker", "ansible", "mysql"],
    },
    {
      title: "My Second Project",
      description: "This is my second project. I built it using Python and Django.",
      tags: ["python", "django", "mysql"],
    },
  ];

  return (
    <Layout title="Projects" description={siteConfig.tagline}>
      <header className={styles.projectHeader}>
        <h2 className="underlineColorSuccess">
          <Translate id="Recent Projects" />
        </h2>
      </header>
      <main id="main">
        <div className={styles.project}>
          <ul>
            {projectDetails.map((project) => (
              <li key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default Project;
