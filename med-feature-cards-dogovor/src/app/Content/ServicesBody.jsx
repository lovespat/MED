import React, { useState } from 'react'
import { Col, Row } from "react-bootstrap";
import ServiceCard from './ServiceCard';

const ServicesBody = props => {
  const cards = props.cards

  return (
    <Row>
      {cards.map(({ title, imageUrl, text }) => (
        <Col> <ServiceCard title={title} imageUrl={imageUrl} text={text} /> </Col>
      ))}
    </Row>
  )
}

export default ServicesBody;