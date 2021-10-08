import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const history = useHistory();
  return (
    <Col
      md={3}
      className="mt-1 "
      onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
    >
      <Card
        style={{ width: 200, height: 300, cursor: 'pointer' }}
        border="light"
      >
        <Image
          width={198}
          height={198}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>{/* {device.brandId} */}</div>
          <div className="mt-1 d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={16} height={16} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
