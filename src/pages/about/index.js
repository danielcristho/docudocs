import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AvatarImageUrl from "@site/static/img/me.jpg";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import { Helmet } from 'react-helmet';


const { Head } = require('@docusaurus/Head');

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About me" description={siteConfig.tagline}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-rb6W21CQz0AmTjEEBhHOtA9u9Ux7+cCViCXcHEDBsu1RzQ0RETN7/XAYCCt+T72M+ZwO2bzM6aaZIYODewYD+A=="
          crossorigin="anonymous"
        />
      </Helmet>
      <header className={styles.aboutHeader}>
        <h2 className="underlineColorSuccess">
          <Translate id="about.aboutMeTittle"/>
        </h2>
      </header>
      <main id="main">
        <div className={styles.about}>
          <div>
            <img className={styles.aboutProfilePic} src={AvatarImageUrl} />
          </div>
          <div className={styles.aboutText}>
            <h2>
              <Translate id="about.aboutMeHello"/>
            </h2>
            <p>
              You can call me  <a>Daniel</a>, a student with a focus on DevOps, Cloud Technologies and Backend Development.
            </p>
            <p>
            I am (or strive to be) an organized and analytical person. The biggest fan of FC Barcelona and mysterious TV series.
            </p>
            <p>
              I strongly care about documenting and sharing knowledge. I use this website as a reference in my daily work and would be glad if others could benefit from the information provided here.
            </p>
            <p>
              I am an active <i class="fab fa-twitter"></i> You can find me there as <a href="https://twitter.com/chrstdan" target="_blank">@chrstdan</a>. If Twitter is not particularly your game, we may get connected on <i class="fab fa-linkedin"></i> where my handle is
              <a href="https://www.linkedin.com/in/daniel-pepuho" target="_blank"> Daniel Pepuho</a>.
            </p>
            <p>Thanks for stopping by.</p>
            {/* <a href="https://stackoverflow.com/users/12501050/m19v">
              <img
                src="https://stackexchange.com/users/flair/17263784.png"
                width="208"
                height="58"
                alt="profile for m19v on Stack Overflow, a network of free, community-driven Q&amp;A sites"
                title="profile for m19v on Stack Overflow, a network of free, community-driven Q&amp;A sites"
              />
            </a> */}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
