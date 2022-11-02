import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col, Image } from 'react-bootstrap';
import logo from "../../logo.svg"
import './Content2.css';
import { Button } from 'react-bootstrap';

function Content2() {
    return (
        <Container fluid>
            <Container fluid>
                <Row className='logoRow'>
                    <Col className='logoCol'>
                        <Image className='logoImage' src= {logo}/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className='buttonCol'>
                        <Button>Text</Button>
                        <div>jopa</div>
                    </Col>
                    <Col className='buttonCol'>
                        <Button>Text</Button>
                        <div>jopa</div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
  }
  
  export default Content2;
  