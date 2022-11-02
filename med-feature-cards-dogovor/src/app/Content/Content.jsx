import React, { useState } from 'react';
import './Content.css';
import Container from 'react-bootstrap/Container';
import { Col, Row, Image, Button, Card, Nav, Carousel, CarouselItem } from "react-bootstrap";
import mainImage from './mainImage.png';
import ServicesBody from './ServicesBody';
import secondImage from './second.JPG';
import CarouselCard from './CarouselCard';
import CarouselCardTwo from './CarouselCardTwo';
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';
import fOne from './doctor1.png';
import fTwo from './doctor2.png';
import fThree from './doctor3.png';
import fFoure from './doctor4.png';
import fFive from './doctor5.png';
import fSix from './fSix.png';
import fSeven from './fSeven.png';
import animal from './animals.jpg';
import lomay from './lomay.jpg';
import pregn from './pregn.jpg';
import stat from './stat.jpg';
import alergchil from './alergchil.jpg';
import manstat from './manstat.jpg';
import massag from './massag.jpg';
import statchil from './statchil.jpg';
import terapiya from './terapiya.jpg';
import urolog from './urolog.jpg';
import stomatolog from './stomatolog.jpg';



function Content() {

  // useScript('https://use.typekit.https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2ba8d5c36b3c273d066fe64189ea6fef217e64f243fea318ba1b76a9e921e984&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=truenet/foobar.js');

  const [cards, setCards] = useState(cardsArray)

  function changeCards(eventKey, event) {
    if (eventKey == "#first") {
      setCards(cardsArray)
    } else if (eventKey == "#second") {
      setCards(cardsArray2)
    } else if (eventKey == "#third") {
      setCards(cardsArray3)
    }
  }
  const dataTop = [
    { url: fOne, name: "Кадцына Татьяна Владимировна", description: "Акушер–гинеколог высшей квалификационной категории, кандидат медицинских наук" },
    { url: fTwo, name: "Горбачев Никита Владимирович", description: "Врач общей практики" },
    { url: fThree, name: "Шустова Ирина Игоревна", description: "Невролог" },
    { url: fFoure, name: "Перлухин Михаил Леонидович", description: "Врач-онколог высшей квалификационной категории" },
    { url: fFive, name: "Коробейников Дмитрий Германович",description: "Врач-терапевт высшей квалификационной категории" },
    { url: fSix, name: "Куршин Борис Ефимович", description: "Кардиолог" },
    { url: fSeven, name: "Овсянникова Лариса Викторовна",description: "Аллерголог-иммунолог высшей квалификационной категории, терапевт, кандидат медицинских наук" },


  ]

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Container fluid>
        <Row className='picRow'>
          <Col className='picCol'>
            <Image className='firstImage' src={mainImage} />
          </Col>
        </Row>
      </Container>
      {/* <Row>
          <Col>
            <Bbutton/>
          </Col>
        </Row> */}
      <Container fluid>
        <Row>
          <Col>
            <div>
              <h1 className='Services justify-content-start'>Наши услуги:</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Card className='HeadServices justify-content-start'>
          <Card.Header >

            <Nav onSelect={changeCards} variant="tabs" defaultActiveKey="#first">
              <Nav.Item className='textCol'>
                <Nav.Link eventKey="#first">Мужчинам</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="#second">Женщинам</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="#third">Детям</Nav.Link>
              </Nav.Item>
            </Nav>

          </Card.Header>
          <Card.Body>
            <ServicesBody cards={cards} />
          </Card.Body>
        </Card>
      </Container>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        {/* <Row>
          <Col> */}
        <Image className='secondImg' src={secondImage} alt="title" />
        {/* <figcaption className='figCaption'>Привет! </figcaption> */}
        {/* </Col>
        </Row> */}
      </Container>
      <Container>
        <Row>
          <Col className='Doctor justify-content-start' xs={5} md={3} lg={2}>
            Врачи
          </Col>
          <Col className='doctorTwo justify-content-start' xs={5} md={3} lg={2}>
            Все врачи
          </Col>
          {/* <Col> </Col>
          <Col> </Col>
          <Col></Col>
          <Col></Col> */}
        </Row>
        <Row>
          <Col >
            <CarouselCardTwo title=" " data={dataTop} />
          </Col>
        </Row>
      </Container>
      {/* <Container fluid className='aboveMapText'>
          <Row>
            <Col ></Col>
          </Row>
          </Container> */}
      <Container fluid className='mapp'>
        <Row>
          <Col className='tttext'>
            <h2>До нас легко добраться!</h2>
            {/* <Col> */}
            <h5>Мы находимся по адресу: </h5>
            <h5>г.Омск, ул. Братская, 5А </h5>
            <h7>ООО Медицинский Лечебно-Диагностический Центр "Доверие"</h7>
            {/* </Col> */}
          </Col>
          <Col>
            <YMaps>
              <div className='mapp'>
                <Map
                  defaultState={{ center: [54.949425, 73.390045], zoom: 17 }}
                  modules={["templateLayoutFactory", "layout.ImageWithContent"]}
                  width="95%"
                >
                  <Placemark className="size-map"
                    geometry={[54.949425, 73.390045]}
                    properties={{
                      // balloonContentBody: "placemark <strong>balloon</strong>",
                      clusterCaption: "placemark",
                      preset: "islands#redIcon",

                      iconCaption: "СИТИМЕД, ул.Братская, 5А"
                    }} />
                </Map>
              </div>
            </YMaps>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const cardsArray = [
  { title: "Лечение аллергии", imageUrl: animal, text: "Негормональный способ лечения аллергического и сезонного ринита. Наши врачи проведут все необходимые исследования вашего организма, чтобы подобрать наиболее эффективное лечение." },
  { title: "Урология", imageUrl: urolog, text: "В урологическом кабинете «СитиМед» оказывается консультативная, диагностическая и лечебная помощь больным с различной урологической патологией у мужчин и женщин.." },
  { title: "Платный стационар", imageUrl: manstat, text: "Предоставляет комплексное и полноценное лечение заболеваний, не требующих круглосуточного наблюдения медицинских специалистов, проводит необходимые дополнительные обследования." },
  { title: "Медицинский массаж", imageUrl: massag, text: "Медицинский массаж – это результативный метод лечения, восстановления трудоспособности и снятия усталости. Еще одно его достоинство – это отличное средство, чтобы эффективно бороться с лишним жиром." },
]

const cardsArray2 = [
  { title: "Лечение аллергии", imageUrl: animal, text: "Негормональный способ лечения аллергического и сезонного ринита. Наши врачи проведут все необходимые исследования вашего организма, чтобы подобрать наиболее эффективное лечение." },
  { title: "Программа по ведению беременности", imageUrl: pregn, text: "Деликатное, внимательное и вежливое отношение к пациенткам. Консультация акушера-гинеколога проходит в психологически комфортной обстановке." },
  { title: "Платный стационар", imageUrl: stat, text: "Предоставляет комплексное и полноценное лечение заболеваний, не требующих круглосуточного наблюдения медицинских специалистов, проводит необходимые дополнительные обследования." },
  { title: "Медицинский массаж", imageUrl: lomay, text: "Медицинский массаж – это результативный метод лечения, восстановления трудоспособности и снятия усталости. Еще одно его достоинство – это отличное средство, чтобы эффективно бороться с лишним жиром." }
]

const cardsArray3 = [
  { title: "Лечение аллергии", imageUrl: alergchil, text: "Негормональный способ лечения аллергического и сезонного ринита. Наши врачи проведут все необходимые исследования вашего организма, чтобы подобрать наиболее эффективное лечение."},
  { title: "Стоматология", imageUrl: stomatolog, text: "Каждому из нас, рано или поздно, требуется консультация стоматолога. И чем раньше вы посетите врача, тем лучше, ведь своевременное обращение – это залог сохранения всего зубного ряда." },
  { title: "Платный детский стационар", imageUrl: statchil, text: "Предоставляет комплексное и полноценное лечение заболеваний, не требующих круглосуточного наблюдения медицинских специалистов, проводит необходимые дополнительные обследования." },
  { title: "Физиотерапия", imageUrl: terapiya, text: "Физиотерапия является достаточно эффективным, доступным и щадящим методом лечения. Минимум побочных эффектов и абсолютная безболезненность." }
]

export default Content;

