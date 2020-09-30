import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import hallImg from './assets/location/hall.jpg';
import restaurantImg from './assets/location/restaurant.jpg'
import venueImg from './assets/location/venue.jpg'

export const Location = () => {
    return (
        <>
            <Row className="mb-4">
                <Col>
                    <h1> Location </h1>
                </Col>
            </Row>

            <Row className="mb-4 align-items-md-center">
                <Col md={4}>
                    <h3>So Much to Do at the Westin Lake Las Vegas</h3>
                    <p>Just northeast of Henderson, NV, the luxurious Westin is a hidden oasis with breathtaking views. Your visit is sure to be memorable.</p>
                </Col>
                <Col md={8}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={venueImg}
                                alt="The Venue"
                            />
                            <Carousel.Caption>
                            <h3>The Venue</h3>
                            <p>The venue where the React Conf will be held.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={hallImg}
                            alt="The Hall"
                            />

                            <Carousel.Caption>
                            <h3>The Hall</h3>
                            <p>Where attendees will be having breaks and networking.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={restaurantImg}
                            alt="The Restaurant"
                            />

                            <Carousel.Caption>
                            <h3>The Restaurant</h3>
                            <p>Where the attendees will enjoy tasty meals</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}