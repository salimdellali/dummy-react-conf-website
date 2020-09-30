import React from 'react';
import { Row, Col, Accordion, Card, Button, Badge } from 'react-bootstrap';

import classicBreakfastImg from './assets/food/classic-breakfast.jpg';
import englishBreakfastImg from './assets/food/english-breakfast.jpg';
import healthySnacksImg from './assets/food/healthy-snacks.jpg';
import regularSnacksImg from './assets/food/regular-snacks.jpg';
import healthyLunchImg from './assets/food/healthy-lunch.jpg';
import fastFoodLunchImg from './assets/food/fast-food-lunch.jpg';
import healthyDinnerImg from './assets/food/healthy-dinner.jpg';
import fastFoodDinnerImg from './assets/food/fast-food-dinner.jpg';

export const Food = () => {
    return (
        <>
            <Row className="mb-4">
                <Col>
                    <h1>Food Options</h1>
                    <p>Different food options are avialable for you during the conference</p>
                </Col>
            </Row>

            <Accordion className="mb-4">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <h4>
                            <Badge pill variant="dark">
                                Breakfast
                            </Badge>
                        </h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={classicBreakfastImg} />
                                    <Card.Body>
                                        <Card.Title>Classic Breakfast</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={englishBreakfastImg} />
                                    <Card.Body>
                                        <Card.Title>English Breakfast</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <h4>
                            <Badge pill variant="warning">
                                Snacks
                            </Badge>
                        </h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <Row>
                            <Col>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={healthySnacksImg} />
                                    <Card.Body>
                                        <Card.Title>Healthy Snackst</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={regularSnacksImg} />
                                    <Card.Body>
                                        <Card.Title>Regular Snacks</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <h4>
                            <Badge pill variant="success">
                                Lunch
                            </Badge>
                        </h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={healthyLunchImg} />
                                    <Card.Body>
                                        <Card.Title>Healthy Lunch</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={fastFoodLunchImg} />
                                    <Card.Body>
                                        <Card.Title>Fast Food Lunch</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        <h4>
                            <Badge pill variant="danger">
                                Dinner
                            </Badge>
                        </h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={healthyDinnerImg} />
                                    <Card.Body>
                                        <Card.Title>Healthy Dinner</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={fastFoodDinnerImg} />
                                    <Card.Body>
                                        <Card.Title>Fast Food Dinner</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}