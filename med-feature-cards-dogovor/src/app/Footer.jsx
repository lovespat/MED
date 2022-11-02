import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Footer.css';
import phone from './phone.png';
import maill from './mail.png';

function Footer() {
  return (
    <Container fluid className='footerStyle justify-content-start'>

      <Row className='textColor'>
        <Col className='oOne'>
          <div>
            <Image className='iImage' src={phone} />
            +7(3812)211226</div>

          <div>
            <Image className='iImage' src={maill} />
            info@citymed55.ru</div>
        </Col>
        <Col>
          <div>Услуги</div>
          <div>Взрослое отделение</div>
          <div>Детское отделение</div>
          <div>Диагностика</div>
          <div>Лаборатория</div>
        </Col>
        <Col>
          <div>Клиника</div>
          <div>О нас</div>
          <div>Врачи</div>
          <div>Отделения</div>
          <div>Контакты</div>
        </Col>
        <Col>
          <div>Пациентам</div>
          <div>Договор онлайн</div>
          <div>Карта пациента</div>
          <div>Акции</div>
          <div>Помощь</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;