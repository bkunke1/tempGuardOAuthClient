import React from 'react';
import styles from './SensorData.module.css';
import { ISensor } from '../../../types/maintypes';

// Bootstrap Components
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import { Modal, ModalProps } from 'react-bootstrap';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import EditSensorForm from '../../../Components/Forms/EditSensorForm/EditSensorForm';

export default function SensorData(props: any) {

  const [sensorData, setSensorData] = React.useState(props.props);

  console.log('props.props', sensorData)


// Modal below is for the Edit Sensor Button

const [editModalShow, setEditModalShow] = React.useState(false);

const handleEditModalClose = () => setEditModalShow(false);
const handleEditModalCloseShow = () => setEditModalShow(true);

function MyVerticallyCenteredEditModal(
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
      aria-labelledby="contained-modal-editSensorModal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-editSensorModal">
          Edit Sensor Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>          
        <EditSensorForm handleClose={handleEditModalClose} sensorName={props.sensorName} sensor={props.sensor} setSensorData={setSensorData}/>
      </Modal.Body>
    </Modal>
  );
}
  

  return (
    <div className={styles.infoNoWrap}>
        <h6>Sensor {sensorData.sensorNumber}</h6>
        <h4 className={styles.sensorNameText}>{sensorData.sensorName}</h4>
        <h6>Current Temp: {sensorData.sensorCurrentTemp}</h6>
        <h6>Status: {sensorData.sensorStatus}</h6>
        <h6>High Alarm: {sensorData.sensorHighAlarm}</h6>
        <h6>Low Alarm: {sensorData.sensorLowAlarm}</h6>
        <Button className={styles.editBtn} onClick={() => setEditModalShow(true)}>Edit</Button>
        <MyVerticallyCenteredEditModal
                      show={editModalShow}
                      onHide={() => setEditModalShow(false)}
                      sensor={sensorData}
                    />
      </div>
  );
}
