import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';
import styles from './Dashboard.module.css';
import Sensor from '../../Components/Sensor/Sensor';
import CreateSensorForm from '../../Components/Forms/CreateSensorForm/CreateSensorForm';
import { setEnvironment } from '../../Context';

// Bootstrap Components
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import { Modal, ModalProps } from 'react-bootstrap';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import EditSensorForm from '../../Components/Forms/EditSensorForm/EditSensorForm';

export default function Dashboard() {
  const context = useContext(myContext) as IUser;
  const [loadingState, setLoadingState] = useState(true);
  const [sensorListState, setSensorListState] = useState([{
    _id: '608f50cc63a04a44e9e29c71',
    sensorNumber: '1',
    sensorName: 'Cooler1',
    sensorCurrentTemp: '32',
    sensorStatus: 'Normal',
    sensorHighAlarm: '40',
    sensorLowAlarm: '20',
  }]);
  

  // dummy data for populating sensors 
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

  

  const getSensorsQuery = {
    query: `
    {
      sensors {
        sensors {
          _id
          sensorNumber
          sensorName
          sensorCurrentTemp
          sensorStatus
          sensorHighAlarm
          sensorLowAlarm
        }
        totalSensors
      }
    }
    `,
  };

  // async function fetchSensorList() {
  //   sensorList2 = await fetch('http://localhost:4000/graphql', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(getSensorsQuery),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((sensorListData) => {
  //       sensorList2 = await sensorListData;
  //       console.log('list', sensorList2.data.sensors);
  //       setLoadingState(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  useEffect(() => {
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getSensorsQuery),
    })
      .then((res) => {
        return res.json();
      })
      .then((sensorListData) => {
        setSensorListState(sensorListData.data.sensors.sensors)
        // console.log(sensorListState);
        setLoadingState(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  
  

  const [modalShow, setModalShow] = React.useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  function MyVerticallyCenteredModal(
    props: JSX.IntrinsicAttributes &
      Omit<
        Pick<
          React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
          >,
          'key' | keyof React.HTMLAttributes<HTMLDivElement>
        > & {
          ref?:
            | ((instance: HTMLDivElement | null) => void)
            | React.RefObject<HTMLDivElement>
            | null
            | undefined;
        },
        BsPrefixProps<'div'> & ModalProps
      > &
      BsPrefixProps<'div'> &
      ModalProps & { children?: React.ReactNode }
  ) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-addSensorModal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-addSensorModal">
            Add Sensor Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateSensorForm handleClose={handleClose} setSensorListState={setSensorListState} sensorListState={sensorListState}/>
        </Modal.Body>
      </Modal>
    );
  }


  

   // loading message prior to loading api data
   if (loadingState) return <p>Loading...</p>;

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
                <Row className={styles.createSensorButton}>
                  <>
                    <Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Add Sensor +
                    </Button>

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </>
                  
                </Row>
                <Row className={styles.sensors}>
                  {sensorListState.map((sensorData) => (
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
