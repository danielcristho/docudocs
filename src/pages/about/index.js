import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AvatarImageUrl from "@site/static/img/me.jpeg";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const { Head } = require('@docusaurus/Head');

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About me" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-rb6W21CQz0AmTjEEBhHOtA9u9Ux7+cCViCXcHEDBsu1RzQ0RETN7/XAYCCt+T72M+ZwO2bzM6aaZIYODewYD+A=="
          crossorigin="anonymous"
        />
        {/* <h2 className="underlineColorSuccess">
          <Translate id="about.aboutMeTittle"/>
        </h2> */}
      </header>
      <main id="main">
          <div className={styles.about}>
          <div>
            <img className={styles.aboutProfilePic} src={AvatarImageUrl} />
          </div>
          <div className={styles.aboutText}>
            <h2 className="underlineColorSuccess">
              <Translate id="about.hello"/>
            </h2>
            <p>
            <Translate id="about.p.1.1" />
              You can call me  <a>Daniel</a>, Currently an Informatics Student at Institut Teknologi Sepuluh Nopember with focus on DevOps, Cloud Technologies and Backend Development.
            </p>
            <p>
            I am (or strive to be) an organized and analytical person. The biggest fan of FC Barcelona and mysterious movies.
            </p>
            <p>
              I strongly care about documenting and sharing knowledge. I use this website as a reference in my daily work and would be glad if others could benefit from the information provided here.
            </p>
            <p>
              I am an active <i class="fab fa-twitter"></i> You can find me there as <a href="https://twitter.com/chrstdan" target="_blank">@chrstdan</a>. If Twitter is not particularly your game, we may get connected on <i class="fab fa-linkedin"></i> where my handle is
              <a href="https://www.linkedin.com/in/daniel-pepuho" target="_blank"> Daniel Pepuho</a>.
            </p>
            <p>Thanks for stopping by.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
