import React, { useContext } from 'react';
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';
import styles from './Dashboard.module.css';
import Sensor from '../Sensor/Sensor';
import { setEnvironment } from '../../Context';

import Container from '../../../node_modules/react-bootstrap/Container';
import Row from '../../../node_modules/react-bootstrap/Row';
import Col from '../../../node_modules/react-bootstrap/Col';

export default function Dashboard() {
  const context = useContext(myContext) as IUser;

  const sensorList = [
    {
      _id: '608f50cc63a04a44e9e29c71',
      sensorNumber: '1',
      sensorName: 'Cooler1',
      sensorCurrentTemp: '32',
      sensorStatus: 'Normal',
      sensorHighAlarm: '40',
      sensorLowAlarm: '20',
    },
    {
      _id: '60921243d737c74e5ce4d99f',
      sensorNumber: '2',
      sensorName: 'Cooler1',
      sensorCurrentTemp: '32',
      sensorStatus: 'Normal',
      sensorHighAlarm: '40',
      sensorLowAlarm: '20',
    },
    {
      _id: '60921252d737c74e5ce4d9a0',
      sensorNumber: '3',
      sensorName: 'Cooler1',
      sensorCurrentTemp: '32',
      sensorStatus: 'Normal',
      sensorHighAlarm: '40',
      sensorLowAlarm: '20',
    },
    {
      _id: '60921256d737c74e5ce4d9a1',
      sensorNumber: '4',
      sensorName: 'Cooler1',
      sensorCurrentTemp: '32',
      sensorStatus: 'Normal',
      sensorHighAlarm: '40',
      sensorLowAlarm: '20',
    },
  ];
  // DB call to fill sensorList with real data below:

  //   async function getData(url = '') {
  //     const response = await fetch(url, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     return response.json();
  //   }

  //   getData('https://musing-golick-d5c510.netlify.app/').then((data) => {
  //     console.log(data);
  //   });

  return (
    <div className={styles.sensorsWrapper}>
      <div>
        {!context ? (
          <div>
            <div className={styles.loginMessage}>
              {/* <h6>Logged in as {context.username}</h6> */}
              <h6>Logged in as Brandon</h6>
            </div>

            <div>
              <Container>
                <Row className={styles.sensors}>
                  {sensorList.map((sensorData) => (
                    <Col xs={6} md={4} lg={3} className={styles.sensor}>
                      {' '}
                      <Sensor
                        key={sensorData._id}
                        _id={sensorData._id}
                        sensorNumber={sensorData.sensorNumber}
                        sensorName={sensorData.sensorName}
                        sensorCurrentTemp={sensorData.sensorCurrentTemp}
                        sensorStatus={sensorData.sensorStatus}
                        sensorHighAlarm={sensorData.sensorHighAlarm}
                        sensorLowAlarm={sensorData.sensorLowAlarm}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
        ) : (
          <h1>Login to view the dashboard</h1>
        )}
      </div>
    </div>
  );
}
