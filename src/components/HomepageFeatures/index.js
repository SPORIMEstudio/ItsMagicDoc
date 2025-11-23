import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '⚡ Performance',
    icon: '🚀',
    description: (
      <>
        Built on modern architecture, ITs Magic Engine delivers exceptional performance
      </>
    ),
  },
  {
    title: '🎨 Visual Editor',
    icon: '✏️',
    description: (
      <>
        Intuitive drag-and-drop interface lets you build scenes quickly. Real-time preview,
        asset management, and component-based workflow streamline your game development process.
      </>
    ),
  },
  {
    title: '💻 Powerful Scripting',
    icon: '⚙️',
    description: (
      <>
        Write game logic with a clean, flexible scripting API. Full Java support,
        intellisense, debugging tools, and extensive standard library included out of the box.
      </>
    ),
  },
  {
    title: '🌐 Deployment',
    icon: '📦',
    description: (
      <>
        Build once
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className="text--center padding-horiz--md">
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <h2 className={styles.featuresTitle}>Why Choose ITs Magic Engine?</h2>
          <p className={styles.featuresSubtitle}>
            Everything you need to bring your creative vision to life
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
