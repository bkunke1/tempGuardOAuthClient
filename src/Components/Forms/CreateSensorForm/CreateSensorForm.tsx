import React, { useState } from 'react';
import styles from './CreateSensorForm.module.css';

export default function CreateSensorForm() {
  const [enteredSensorName, setEnteredSensorName] = useState('');
  const [enteredSensorNameIsTouched, setEnteredSensorNameIsTouched] =
    useState(false);

  const enteredSensorNameIsValid = enteredSensorName.trim() !== '';
  const sensorNameInputIsInvalid =
    !enteredSensorNameIsValid && enteredSensorNameIsTouched;

  const enteredSensorHighAlarmIsValid = false;
  const enteredSensorLowAlarmIsValid = false;

  let formIsValid = false;

  if (
    enteredSensorNameIsValid &&
    enteredSensorHighAlarmIsValid &&
    enteredSensorLowAlarmIsValid
  ) {
    formIsValid = true;
  }

  const sensorInputChangeHandler = (event: any) => {
    setEnteredSensorName(event.target.value);
  };

  const sensorInputBlurHandler = (event: any) => {
    setEnteredSensorNameIsTouched(true);
  };

  const createSensorFormSubmitHandler = (event: any) => {
    event.preventDefault();

    setEnteredSensorNameIsTouched(true);

    if (!enteredSensorNameIsValid) {
      return;
    }
    console.log(enteredSensorName);
    setEnteredSensorName('');
    setEnteredSensorNameIsTouched(false);
  };

  const sensorNameInputClasses = sensorNameInputIsInvalid
    ? styles.invalid
    : styles.formControl;

  return (
    <form onSubmit={createSensorFormSubmitHandler}>
      <div>
        <label htmlFor="sensorName">Sensor Name</label>
        <input
          className={sensorNameInputClasses}
          type="text"
          id="sensorName"
          onChange={sensorInputChangeHandler}
          onBlur={sensorInputBlurHandler}
        />
        {sensorNameInputIsInvalid && (
          <p className={styles.errorText}>Sensor Name must not be empty.</p>
        )}
      </div>
      <div className="">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}
