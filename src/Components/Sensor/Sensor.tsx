import React from 'react';
import styles from './Sensor.module.css';
import SensorThermometer from './SensorThermometer/SensorThermometer'
import SensorData from './SensorData/SensorData'

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export default function Sensor(this: any) {

    const sensorList = [1,2,3];


  return (
        <div className={styles.sensorWrapper}>
        <SensorData />
        <SensorThermometer />       
      </div>
      
    
  );
}
