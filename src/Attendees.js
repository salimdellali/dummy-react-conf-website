import React, { useState, useEffect } from 'react';
import { PageHeading } from './components/PageHeading';
import { CallToAction } from './components/CallToAction';
import { Container, Media, Image, Row, Col } from 'react-bootstrap';

export const Attendees = () => {

    const [attendees, setAttendees] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=22")
                .then(response => response.json())
                .then(data => {
                    setAttendees(data.results);
                })
    }, [])

    return (
        <>
           <PageHeading
                pageTitle="React Conf 2020 Attendees"
                pageDescription="Meet your fellow Attendees"
            /> 

            <Container>
                <Row>
                    {
                        attendees.map((person, index) => {
                            return (
                                <Col lg={3} md={6} className="mb-4" key={index}>
                                    <Media className="align-items-center">
                                        <Image
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src={person.picture.large}
                                            alt={person.name.first + ' ' + person.name.last}
                                            roundedCircle 
                                        />
                                        <Media.Body>
                                            <h6>{person.name.first + ' ' + person.name.last}</h6>
                                        </Media.Body>
                                    </Media>
                                </Col>
                            )
                          })
                    }
                </Row>
            </Container>
            <CallToAction />
        </>
    );
};

