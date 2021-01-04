import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Grundlagen des Web</>,
    imageUrl: 'img/registration-web.svg',
    description: (
      <>
        Dieses Skriptum bietet eine Übersicht über die Grundlagen des WWW. Es enthält
        einen Überblick über die wichtigsten Standards des Webs: HTTP, HTML, URIs, CSS, ...
      </>
    ),
  },
  {
    title: <>Erstellen von Webseiten</>,
    imageUrl: 'img/internet-web-browser.svg',
    description: (
      <>
        Das Skriptum vermittelt ein Grundlagenwissen darüber, wie man Webseiten baut: Von
        Grund auf mit HTML, CSS und JavaScript, unter Verwendung eines Content Management Systems,
        mit Frameworks wie Angular, ...
      </>
    ),
  },
  {
    title: <>Interaktive Codebeispiele</>,
    imageUrl: 'img/brackets-coding.svg',
    description: (
      <>
        Das Skriptum enthält immer wieder interaktive Codebeispiele. Sie können die 
        Beispiele selbst in <a href="https://www.jsfiddle.net" target="_blank">JSFiddle</a> ansehen,
        bearbeiten und sehen, welche Auswirkungen Ihre Änderungen haben.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline} <em>Web Basics</em> am Campus 02</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
