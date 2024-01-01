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
      title: "PPDB Jawa Timur 2023",
      description: "This is a project for the admission of new students to high schools (SMA/SMK) in East Java. My task is to be an IT infrastructure for the website.",
      tags: ["docker", "ansible", "mysql"],
      link: "https://ppdbjatim.net",
    },
    {
      title: "Docker Stuff",
      description: "This is my first open source project while exploring Docker, I think I'll update it later. Feel free if You want to contribute.",
      tags: ["docker"],
      link: "https://github.com/danielcristho/docker-stuff",
    },
    {
      title: "Setup Server",
      description: "Shell Script project to manage Ubuntu server or other Linux Server. If You want to contribute, maybe to add a feature or any solutions please create an Issue before.",
      tags: ["linux"],
      link: "https://github.com/danielcristho/setup-server",
    },
  ];

  return (
    <Layout title="Projects" description={siteConfig.tagline}>
      <header className={styles.projectHeader}>
        <h2 className="underlineColorSuccess">
          <Translate id="Projects" />
        </h2>
      </header>
      <main id="main">
        <div className={styles.project}>
          <ul>
            {projectDetails.map((project) => (
              <li key={project.title}>
                <h3>
                  {project.link ? (
                    <a href={project.link}>{project.title}</a>
                  ) : (
                    project.title
                  )}
                </h3>
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