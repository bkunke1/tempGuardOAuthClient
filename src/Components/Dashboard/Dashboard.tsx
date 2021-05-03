import React, { useContext } from 'react';
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';
import styles from './Dashboard.module.css';
import Sensor from '../Sensor/Sensor'

import Container from '../../../node_modules/react-bootstrap/Container';
import Row from '../../../node_modules/react-bootstrap/Row';
import Col from '../../../node_modules/react-bootstrap/Col';

export default function Dashboard() {
  const context = useContext(myContext) as IUser;
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
                  <Col xs={6} md={4} lg={3} className={styles.sensor}>
                    <Sensor />
                  </Col>
                  <Col xs={6} md={4} lg={3} className={styles.sensor}>
                    2
                  </Col>
                  <Col xs={6} md={4} lg={3} className={styles.sensor}>
                    3
                  </Col>
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
