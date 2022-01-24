import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'micro:Bit',
    Svg: require('../../static/img/microbit.svg').default,
    description: (
      <>
        The <a href="https://www.microbit.org/">micro:bit</a> platform helps you understand how computers work. 
        It has <a href="https://www.microbit.org/get-started/user-guide/features-in-depth/"> rich features </a> 
        and is <a href="https://www.microbit.org/code/">programmable</a> in Python, Scratch, Swift or Microsoft MakeCode.
      </>
    ),
  },
  {
    title: 'Scratch',
    Svg: require('../../static/img/scratch.svg').default,
    description: (
      <>
        <a href="https://scratch.mit.edu/"> MIT Scratch</a> is a block-based coding platform with an <a href="https://www.media.mit.edu/posts/ai-blocks/">AI Blocks extension</a> 
        to help students explore machine learning models, robotics and AI engines from Scratch.
      </>
    ),
  },
  {
    title: 'ML Models',
    Svg: require('../../static/img/mlmodels.svg').default,
    description: (
      <>
        Explore ways to create machine learning models for use in apps. 
        We'll look at free, no-code options like <a href="https://lobe.ai">Microsoft Lobe.ai </a> 
        and <a href="https://teachablemachine.withgoogle.com/"> 
        Google Teachable Machines</a>, to start with.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
