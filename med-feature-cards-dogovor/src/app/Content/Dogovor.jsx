import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col, Image, FormGroup, Dropdown, Form } from 'react-bootstrap';
import logo from "../../logo.svg"
import './Dogovor.css';
import { Button } from 'react-bootstrap';
import sogl from './sogl.png';

function Dogovor() {
    return (
        <Container fluid>
            <Container >
                <Row>
                    <Col>
                        <h1 className='styleTextt'>Договор</h1>
                        <h3 className='styleTextt'>Важно</h3>
                        <h5 className='styleTextt1'>В случае записи на прием несовершеннолетнего (первичный или повторный прием), в клинику пациенту необходимо прийти в сопровождении законного представителя (законным представителем являются родители, опекуны или любые лица, на которых оформлена заверенная у юриста доверенность от родителей) для подписания договора, согласий на медицинские вмешательства и обработку персональных данных, в присутствии сотрудника медицинского центра, а так же для непосредственного присутствия во время приема. </h5>
                        <h5 className='styleTextt1'>При себе необходимо иметь оригиналы документов, которые были указаны при заполнении формы: паспорт законного представительства и свидетельство о рождении ребенка.</h5>
                        <h5 className='styleTextt1'>В случае опеки или оформленной от родителей доверенности на сопровождающее лицо, необходимо так же предоставить оригиналы этих документов.</h5>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h1 className='styleTextt'>Пациент</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Select aria-label="Default select example">
                                    <option>Гражданство</option>
                                    <option value="1">Гражданин РФ, взрослый</option>
                                    <option value="2">Гражданин РФ, ребёнок</option>
                                    <option value="3">Иностр.гражданин, взрослый</option>
                                    <option value="4">Иностр.гражданин, ребёнок</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicSurname">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control placeholder="Фамилия*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control placeholder="Имя*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFatherName">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control placeholder="Отчество*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicBirthDate">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control placeholder="Дата рождения*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Серия с-ва о рождении*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control placeholder="Номер с-ва о рождении*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicBirthDate">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control placeholder="Кем выдано св-во*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Дата выдачи*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <h2 className='styleTextt'>Адрес регистрации</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicCity">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Город*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicStreet">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Улица*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicHouse">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Дом*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicSubhouse">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Корпус/строение*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFlat">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Квартира*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <h1 className='styleTextt'>Родитель/Опекун/Законный представитель</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportGroup">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Фамилия*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportNumber">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Имя*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportSpecialCode">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Отчество*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportPlace">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Дата рождения*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportDate">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="E-mail*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportDate">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Телефон*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <h2 className='styleTextt'>Паспортные данные</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportGroup">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Серия*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportNumber">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Номер*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportSpecialCode">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Код подразделения*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportPlace">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Кем выдан*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassportDate">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Дата выдачи*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>     
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <h2 className='styleTextt'>Адрес регистрации</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicCity">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Город*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicStreet">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Улица*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicHouse">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Дом*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicSubhouse">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Корпус/строение*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFlat">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Квартира*" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <h2 className='styleTextt'>Место работы/учёбы</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicCompanyName">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="*Компания/Учебное заведение" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicCompanyAddres">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="*Адрес" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicCompanyHuman">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="*Должность" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Row>
                        <Col className='styleTextt2'>* Данный раздел необходимо заполнить в случае, если сдается ПЦР.</Col>
                    </Row>
                </Row>
            </Container>
            <Container className='buttonStyle'>
            <Button  variant='danger'>Подать документы</Button>
            </Container>
            <Container>
            <Row>
                    <Col className='styleTextt3'>
                    Защита от спама reCAPTCHA Конфиденциальность и Условия использования
                    </Col>
                </Row>    
            </Container>
            <Container >
            <Row>
            <Col className='picCol'>
            <Image className='iimgst' src={sogl}/>
            </Col>
            </Row>
            </Container>
        </Container>
    );
}

export default Dogovor;
