import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './CreateSensorForm.module.css';

import { setEnvironment } from '../../../Context';

export default function CreateSensorForm(props: any) {
  const [enteredSensorName, setEnteredSensorName] = useState('');
  const [enteredSensorNameIsTouched, setEnteredSensorNameIsTouched] =
    useState(false);

  const [enteredSensorHighAlarm, setEnteredSensorHighAlarm] = useState('');
  const [enteredSensorHighAlarmIsTouched, setEnteredSensorHighAlarmIsTouched] =
    useState(false);

  const [enteredSensorLowAlarm, setEnteredSensorLowAlarm] = useState('');
  const [enteredSensorLowAlarmIsTouched, setEnteredSensorLowAlarmIsTouched] =
    useState(false);

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
    enteredSensorHighAlarm > enteredSensorLowAlarm;
  const sensorHighAlarmInputIsInvalid =
    !enteredSensorHighAlarmIsValid && enteredSensorHighAlarmIsTouched;

  const enteredSensorLowAlarmIsValid =
    enteredSensorLowAlarm.trim() !== '' &&
    validateTemperateInput(enteredSensorHighAlarm);
  const sensorLowAlarmInputIsInvalid =
    !enteredSensorLowAlarmIsValid && enteredSensorLowAlarmIsTouched;

  let formIsValid = false;

  if (
    enteredSensorNameIsValid &&
    enteredSensorHighAlarmIsValid &&
    enteredSensorLowAlarmIsValid
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

  const createSensorFormSubmitHandler = (event: any) => {
    event.preventDefault();

    setEnteredSensorNameIsTouched(true);
    setEnteredSensorHighAlarmIsTouched(true);
    setEnteredSensorLowAlarmIsTouched(true);

    if (
      !enteredSensorNameIsValid ||
      !enteredSensorHighAlarmIsValid ||
      !enteredSensorLowAlarmIsValid
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

    // fetch(`${setEnvironment}/createSensor`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Example POST method implementation:
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData(`${setEnvironment}/createSensor`, { sensorName: enteredSensorName, sensorHighAlarm: enteredSensorHighAlarm, sensorLowAlarm: enteredSensorLowAlarm}).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

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
    <form onSubmit={createSensorFormSubmitHandler}>
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
          onClick={createSensorFormSubmitHandler}
        >
          Save
        </Button>
      </div>
    </form>
  );
}
