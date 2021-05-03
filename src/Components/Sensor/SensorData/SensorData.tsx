import React from 'react';
import styles from './SensorData.module.css';

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export default function SensorData() {
  return (
    <div>
        <h4>Sensor [Number]</h4>
        <h6>[Sensor Name]</h6>
        <h5>Current Temp: [99.F]</h5>
        <h6>Status: [status]</h6>
        <h6>High Alarm: [temp]</h6>
        <h6>Low Alarm: [temp]</h6>
        <Button>Edit</Button>
      </div>
  );
}
