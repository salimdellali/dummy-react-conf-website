import React from 'react'
import { Tabs, Tab, Row, Col, Nav, Badge, Container } from 'react-bootstrap';
import { PageHeading } from './components/PageHeading';
import { CallToAction } from './components/CallToAction';
import schedule from './schedule.json';

export const Schedule = () => {
    return (
        <>

            <PageHeading
                pageTitle="The Schedule"
                pageDescription="The React Conf Agenda"
            />

            <Container>
                <div className="mb-4">
                    <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
                        {schedule.map((day) => (
                            <Tab 
                                key={day.id} 
                                eventKey={day.id} 
                                title={day.description}
                            >
                                <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                    <Row>
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column">
                                                {day.schedule.map((session) => (
                                                    <Nav.Item key={session.id}>
                                                        <Nav.Link eventKey={session.id}>
                                                            <Badge variant="secondary">{session.time}</Badge>
                                                            <br /> {session.name} {session.speakers.length > 0 ? "/w " + session.speakers.toString() : ""}
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                ))}
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                {day.schedule.map((session) => (
                                                    <Tab.Pane key={session.id} eventKey={session.id}>
                                                        <h2 className="mt-2">
                                                            <Badge variant="secondary">{session.time}</Badge> {session.name}
                                                        </h2>
                                                        <p>{session.description}</p>
                                                    </Tab.Pane>
                                                ))}
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </Container>
            <CallToAction />
        </>
    )
}