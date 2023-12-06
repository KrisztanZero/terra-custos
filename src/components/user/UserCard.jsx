import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import UpdateButton from '../buttons/UpdateButton';
import '../../customStyles/text-shadow.css';

const UserCard = ({ user, handleUpdateProfileClick }) => (
  <Container>
    <Card
      id="user-card"
      className="w-50 mx-auto m-5 bg-transparent text-white custom-text-shadow"
    >
      <Card.Body id="user-card-body">
        <Row>
          <Col md={3}>
            <span className="font-weight-bold">Name</span>
          </Col>
          <Col md={9}>{user.username}</Col>
        </Row>
        <Row className="mt-3">
          <Col md={3}>
            <span className="font-weight-bold">E-mail</span>
          </Col>
          <Col md={9}>{user.email}</Col>
        </Row>
        <Row className="mt-3">
          <Col md={3}>
            <span className="font-weight-bold">Introduction</span>
          </Col>
          <Col md={9}>
            {user.introduction &&
              user.introduction !== null &&
              user.introduction.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12}>
            <UpdateButton onClick={handleUpdateProfileClick} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Container>
);

export default UserCard;
