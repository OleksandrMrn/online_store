import React, { useEffect, useState } from 'react';
import star from '../assets/star.png';
import { Col, Container, Image, Card, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchDevice } from '../http/deviceAPI';
import { Spinner } from 'react-bootstrap';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDevice(id)
      .then((data) => setDevice(data))
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) {
    return <Spinner animation="border" variant="info" />;
  }
  return (
    <Container className="mt-3">
      <div
        style={{
          width: 730,
          height: 45,
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 30,
          lineHeight: 35,
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
        }}
      >
        <h2>{device.name}</h2>
        <div className="d-flex flow-nowrap align-items-center justify-content-center">
          <div
            style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 30,
            }}
          >
            {device.rating}
          </div>
          <div
            style={{
              background: `url(${star}) no-repeat center center`,
              width: 16,
              height: 16,
            }}
          />
        </div>
      </div>
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={'auto'}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column m-3">
            <h4>Performance</h4>
            {device.info.map((info, index) => (
              <Row
                key={info.id}
                style={{
                  background: index % 2 === 0 ? 'lightgray' : 'transparent',
                  padding: 5,
                }}
              >
                {info.title}: {info.description}
              </Row>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '1px solid lightgray',
            }}
          >
            <h3>~ {device.price} ₴</h3>
            <Button variant={'outline-dark'}>Add to basket</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
