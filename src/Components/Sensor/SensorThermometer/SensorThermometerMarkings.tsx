import React from 'react';
import styles from './SensorThermometer.module.css';

export default function SensorMarkings() {
  return (
    <div className={styles.markingsSpacer}>
      <p className={styles.celSpacer}>CEL</p>
      <p className={styles.maxSpacer}>MAX</p>
      <p className={styles.midSpacer}>MID</p>
      <p className={styles.minSpacer}>MIN</p>
      <p>FLR</p>
    </div>
  );
}
