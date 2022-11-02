import React, { useState } from 'react'
import { Card, Carousel, CarouselItem, Row, Col, Container, Button } from "react-bootstrap";
import ServiceCard from './ServiceCard';

function CarouselCard() {
  return (
    // <Container fluid>
    <Row>

      <Carousel interval={null} variant="dark">
        <Carousel.Item>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffoodcity.ru%2Fproduct%2Fapelsin&psig=AOvVaw1Imn8kWIB56bepGq_IhdSE&ust=1653229126782000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCNDDsMnk8PcCFQAAAAAdAAAAABAD"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffoodcity.ru%2Fproduct%2Fapelsin&psig=AOvVaw1Imn8kWIB56bepGq_IhdSE&ust=1653229126782000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCNDDsMnk8PcCFQAAAAAdAAAAABAD"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* </Container> */}
    </Row>
  )
}
export default CarouselCard;