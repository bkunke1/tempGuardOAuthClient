import React from 'react';
import styles from './SensorData.module.css';
import { ISensor } from '../../../types/maintypes';

// Bootstrap Components
import Button from 'react-bootstrap/Button';

export default function SensorData(props: any) {

  return (
    <div>
        <h4>Sensor {props.props.sensorNumber}</h4>
        <h6>{props.props.sensorName}</h6>
        <h5>Current Temp: {props.props.sensorCurrentTemp}</h5>
        <h6>Status: {props.props.sensorStatus}</h6>
        <h6>High Alarm: {props.props.sensorHighAlarm}</h6>
        <h6>Low Alarm: {props.props.sensorLowAlarm}</h6>
        <Button>Edit</Button>
      </div>
  );
}
