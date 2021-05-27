import React from 'react';
import styles from './Sensor.module.css';
import SensorThermometer from './SensorThermometer/SensorThermometer'
import SensorMarkings from './SensorThermometer/SensorThermometerMarkings'
import SensorData from './SensorData/SensorData'
import { ISensor } from '../../types/maintypes';

export default function Sensor(props: ISensor) {

  return (
        <div className={styles.sensorWrapper}>
        <SensorData props={props}/>
        <SensorMarkings />
        <SensorThermometer />       
      </div>
      
    
  );
}
