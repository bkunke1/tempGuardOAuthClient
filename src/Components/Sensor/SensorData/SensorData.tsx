import React from 'react';
import styles from './SensorData.module.css';

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export default function SensorData(props: any) {
  return (
    <div>
        <h4>Sensor {props.sensorNum}</h4>
        <h6>{props.sensorName}</h6>
        <h5>Current Temp: {props.currTemp}</h5>
        <h6>Status: {props.currStatus}</h6>
        <h6>High Alarm: {props.sensorHighAlarm}</h6>
        <h6>Low Alarm: {props.sensorLowAlarm}</h6>
        <Button>Edit</Button>
      </div>
  );
}
