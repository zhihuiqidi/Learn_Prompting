import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "简单易用",
    Svg: require("@site/static/img/astronaut.png").default,
    description: <>专为初学者打造</>,
  },
  {
    title: "专注于重要的事情",
    Svg: require("@site/static/img/computer.png").default,
    description: <>花更少的时间获得更好的LLM结果</>,
  },
  {
    title: "奔向太空",
    Svg: require("@site/static/img/rocket.png").default,
    description: <>学习高级提示工程</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <center>
        <div className="text--center">
          <a href="docs/intro">
            <img
              src={Svg}
              alt="img"
              width="251px"
              style={{ alignSelf: "center", borderRadius: "1rem" }}
            />
          </a>
        </div>
        <div className="text--center padding-horiz--md">
          <h3 className="margin-vert--sm">{title}</h3>
          <p>{description}</p>
        </div>
      </center>
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
