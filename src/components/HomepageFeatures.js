import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Erklärungen",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Hier findest du einige Erklärungen rund um das Thema Buchhaltung.</>
    ),
  },
  {
    title: "Grafiken",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Anhand von Grafiken werden einige Schritte der Buchhaltung verdeutlicht.
      </>
    ),
  },
  {
    title: "Übungen mit Lösungen",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Hier kannst du dein Wissen selbst Testen und selbst üben. Zu den Übungen
        werden selbstverständlich Lösungen bereitgestellt.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
