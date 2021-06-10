import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './EditSensorForm.module.css';

import { setEnvironment } from '../../../Context';

export default function EditSensorForm(props: any) {
  const [enteredSensorName, setEnteredSensorName] = useState(
    props.sensor.sensorName
  );
  const [enteredSensorNameIsTouched, setEnteredSensorNameIsTouched] =
    useState(false);

  const [enteredSensorHighAlarm, setEnteredSensorHighAlarm] = useState(
    props.sensor.sensorHighAlarm
  );
  const [enteredSensorHighAlarmIsTouched, setEnteredSensorHighAlarmIsTouched] =
    useState(false);

  const [enteredSensorLowAlarm, setEnteredSensorLowAlarm] = useState(
    props.sensor.sensorLowAlarm
  );
  const [enteredSensorLowAlarmIsTouched, setEnteredSensorLowAlarmIsTouched] =
    useState(false);

  const [enteredSensorCalibration, setEnteredSensorCalibration] = useState(
    props.sensor.sensorCurrentTemp
  );
  const [
    enteredSensorCalibrationIsTouched,
    setEnteredSensorCalibrationIsTouched,
  ] = useState(false);

  const enteredSensorNameIsValid = enteredSensorName.trim() !== '';
  const sensorNameInputIsInvalid =
    !enteredSensorNameIsValid && enteredSensorNameIsTouched;

  // regex interger validation
  function validateTemperateInput(temp: any) {
    return /^\d+$/.test(temp);
  }

  const enteredSensorHighAlarmIsValid =
    enteredSensorHighAlarm.trim() !== '' &&
    validateTemperateInput(enteredSensorHighAlarm) &&
    +enteredSensorHighAlarm > +enteredSensorLowAlarm;
  const sensorHighAlarmInputIsInvalid =
    !enteredSensorHighAlarmIsValid && enteredSensorHighAlarmIsTouched;

  const enteredSensorLowAlarmIsValid =
    enteredSensorLowAlarm.trim() !== '' &&
    validateTemperateInput(enteredSensorHighAlarm);
  const sensorLowAlarmInputIsInvalid =
    !enteredSensorLowAlarmIsValid && enteredSensorLowAlarmIsTouched;

  const enteredSensorCalibrationIsValid =
    enteredSensorCalibration.trim() !== '';

  let formIsValid = false;

  if (
    enteredSensorNameIsValid &&
    enteredSensorHighAlarmIsValid &&
    enteredSensorLowAlarmIsValid &&
    enteredSensorCalibrationIsValid
  ) {
    formIsValid = true;
  }

  const sensorNameInputChangeHandler = (event: any) => {
    setEnteredSensorName(event.target.value);
  };

  const sensorNameInputBlurHandler = (event: any) => {
    setEnteredSensorNameIsTouched(true);
  };

  const sensorHighAlarmInputChangeHandler = (event: any) => {
    setEnteredSensorHighAlarm(event.target.value);
  };

  const sensorHighAlarmInputBlurHandler = (event: any) => {
    setEnteredSensorHighAlarmIsTouched(true);
  };

  const sensorLowAlarmInputChangeHandler = (event: any) => {
    setEnteredSensorLowAlarm(event.target.value);
  };

  const sensorLowAlarmInputBlurHandler = (event: any) => {
    setEnteredSensorLowAlarmIsTouched(true);
  };

  const sensorCalibrationInputChangeHandler = (event: any) => {
    setEnteredSensorCalibration(event.target.value);
  };

  const sensorCalibrationInputBlurHandler = (event: any) => {
    setEnteredSensorCalibrationIsTouched(true);
  };

  const editSensorFormSubmitHandler = (event: any) => {
    event.preventDefault();

    setEnteredSensorNameIsTouched(true);
    setEnteredSensorHighAlarmIsTouched(true);
    setEnteredSensorLowAlarmIsTouched(true);

    if (
      !enteredSensorNameIsValid ||
      !enteredSensorHighAlarmIsValid ||
      !enteredSensorLowAlarmIsValid ||
      !enteredSensorCalibrationIsValid
    ) {
      return;
    }
    console.log('SensorName', enteredSensorName);
    console.log('HighAlarm', enteredSensorHighAlarm);
    console.log('LowAlarm', enteredSensorLowAlarm);

    setEnteredSensorName('');
    setEnteredSensorHighAlarm('');
    setEnteredSensorLowAlarm('');
    setEnteredSensorNameIsTouched(false);
    setEnteredSensorHighAlarmIsTouched(false);
    setEnteredSensorLowAlarmIsTouched(false);
    setEnteredSensorCalibrationIsTouched(false);

    const graphqlQuery = {
      query: `
      mutation {
        editSensor(sensorInput: { _id: "${props.sensor._id}", name: "${enteredSensorName}", highAlarm: "${enteredSensorHighAlarm}", lowAlarm: "${enteredSensorLowAlarm}", calibrationTemp: "${enteredSensorCalibration}"}) {
          _id
          sensorName
          sensorLowAlarm
          sensorHighAlarm
          sensorCurrentTemp
        }
      }
      `,
    };

    props.setSensorData(
      {
        _id: `${props.sensor._id}`,
        sensorName: `${enteredSensorName}`,
        sensorStatus: 'Normal',
        sensorCurrentTemp: `${enteredSensorCalibration}`,
        sensorHighAlarm: `${enteredSensorHighAlarm}`,
        sensorLowAlarm: `${enteredSensorLowAlarm}`,
      }
    );

    // props.setSensorData(props.sensor);

    // fetch('http://localhost:4000/graphql', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(graphqlQuery),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((resData) => {
    //     console.log('resData', resData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // const getSensorsQuery = {
    //   query: `
    //     {
    //       sensors {
    //         sensors {
    //           _id
    //           sensorNumber
    //           sensorName
    //           sensorCurrentTemp
    //           sensorStatus
    //           sensorHighAlarm
    //           sensorLowAlarm
    //         }
    //         totalSensors
    //       }
    //     }
    //     `,
    // };

    props.handleClose();
  };

  const sensorNameInputClasses = sensorNameInputIsInvalid
    ? styles.invalid
    : styles.formControl;

  const sensorHighAlarmInputClasses = sensorHighAlarmInputIsInvalid
    ? styles.invalid
    : styles.formControl;

  const sensorLowAlarmInputClasses = sensorLowAlarmInputIsInvalid
    ? styles.invalid
    : styles.formControl;

  return (
    <form onSubmit={editSensorFormSubmitHandler}>
      <div className={styles.sensorForm}>
        <label htmlFor="sensorName">Sensor Name: </label>
        <input
          className={sensorNameInputClasses}
          type="text"
          id="sensorName"
          onChange={sensorNameInputChangeHandler}
          onBlur={sensorNameInputBlurHandler}
          value={enteredSensorName}
        />
        {sensorNameInputIsInvalid && (
          <p className={styles.errorText}>Sensor Name must not be empty.</p>
        )}
        <label htmlFor="highAlarm">High Alarm:</label>
        <input
          className={sensorHighAlarmInputClasses}
          type="text"
          id="sensorHighAlarm"
          onChange={sensorHighAlarmInputChangeHandler}
          onBlur={sensorHighAlarmInputBlurHandler}
          value={enteredSensorHighAlarm}
        />
        {sensorHighAlarmInputIsInvalid && (
          <p className={styles.errorText}>
            Sensor High Alarm must be a number and must not be empty.
          </p>
        )}
        <label htmlFor="lowAlarm">Low Alarm:</label>
        <input
          className={sensorLowAlarmInputClasses}
          type="text"
          id="sensorLowAlarm"
          onChange={sensorLowAlarmInputChangeHandler}
          onBlur={sensorLowAlarmInputBlurHandler}
          value={enteredSensorLowAlarm}
        />
        {sensorLowAlarmInputIsInvalid && (
          <p className={styles.errorText}>
            Sensor Low Alarm must be a number and must not be empty.
          </p>
        )}
        <label htmlFor="calibration">Calibrate Temp:</label>
        <input
          className={styles.sensorCalibrateTempInputClasses}
          type="text"
          id="sensorCalibration"
          onChange={sensorCalibrationInputChangeHandler}
          onBlur={sensorCalibrationInputBlurHandler}
          value={enteredSensorCalibration}
        />
      </div>

      <div className={styles.formButtons}>
        <Button
          className={`btn-warning ${styles.cancelButton}`}
          onClick={props.handleClose}
        >
          Cancel
        </Button>
        <Button
          className="btn-success"
          disabled={!formIsValid}
          onClick={editSensorFormSubmitHandler}
        >
          Save
        </Button>
      </div>
    </form>
  );
}
