import React from 'react';
import styles from './SensorThermometer.module.css';

// Bootstrap Components

export default function SensorThermometer() {
    return (
        <div>
        <svg width="100" height="220">
          <svg x="5" y="0">
            <rect
              x="20"
              y="0"
              width="50"
              height="220"
              fill="black"
            ></rect>
            <svg x="20" y="0">
              <rect
                x="5"
                y="5"
                width="40"
                height="210"
                fill="red"
              ></rect>
              <rect
                id="validTempZone1"
                x="5"
                y="51.25"
                width="40"
                height="105"
                fill="green"
              ></rect>
            </svg>
            <svg id="tempBar0">
              <rect
                x="20"
                y="30.75"
                width="50"
                height="4"
                fill="yellow"
                stroke="black"
                strokeWidth="2"
              ></rect>
              <polygon
                points="20,26.75 30,32.75 20,38.75"
                fill="yellow"
                stroke="black"
                strokeWidth="2"
              ></polygon>
              <polygon
                points="70,26.75 60,32.75 70,38.75"
                fill="yellow"
                stroke="black"
                strokeWidth="2"
              ></polygon>
            </svg>
            <svg>
              <rect
                x="0"
                y="2.5"
                width="10"
                height="2.5"
                fill="black"
              ></rect>
              <rect
                x="0"
                y="52.5"
                width="10"
                height="2.5"
                fill="black"
              ></rect>
              <rect
                x="0"
                y="104"
                width="10"
                height="2.5"
                fill="black"
              ></rect>
              <rect
                x="0"
                y="155"
                width="10"
                height="2.5"
                fill="black"
              ></rect>
              <rect
                x="0"
                y="206"
                width="10"
                height="2.5"
                fill="black"
              ></rect>
            </svg>
          </svg>
        </svg>
      </div>
    );
  }
  
