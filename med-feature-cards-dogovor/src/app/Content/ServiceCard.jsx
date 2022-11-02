import React, { useState } from 'react'
import { Card } from "react-bootstrap";

const ServiceCard = props => {
  const title = props.title
  const text = props.text
  const imageUrl = props.imageUrl

  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard;