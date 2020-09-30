import React from 'react'
import { Tabs, Tab, Row, Col, Nav, Badge } from 'react-bootstrap';

export const Schedule = () => {
    return (
        <>
            <Row className="mb-4">
                <Col>
                    <h1>Schedule</h1>
                </Col>
            </Row>
            
            <div className="mb-4">
                <Tabs defaultActiveKey="day1" id="uncontrolled-tab-example">
                    <Tab eventKey="day1" title="Day 1 · December 20">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first"><Badge variant="secondary">7:00 am</Badge><br/> Arrivals</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"><Badge variant="secondary">7:30 am</Badge><br/> Breakfast & Networking</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third"><Badge variant="secondary">8:30 am</Badge><br/> Keynote /w John Doe</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth"><Badge variant="secondary">9:00 am</Badge><br/> Building the New Facebook with React, GraphQL and Relay /w Jane Doe</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth"><Badge variant="secondary">10:00 am</Badge><br/> Snack Break & Networking</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <h2 className="mt-2"><Badge variant="secondary">7:00 am</Badge> Arrivals</h2>
                                            <p>Waiting for attendees to arrive to the conf.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h2 className="mt-2"><Badge variant="secondary">7:30 am</Badge> Breakfast & Networking</h2>
                                            <p>Enjoy a tasty breakfast with your fellow attendees.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <h2 className="mt-2"><Badge variant="secondary">8:30 am</Badge> Keynote /w John Doe</h2>
                                            <p>A keynote in public speaking is a talk that establishes a main underlying theme. ... At political or industrial conventions and expositions and at academic conferences, the keynote address or keynote speech is delivered to set the underlying tone and summarize the core message or most important revelation of the event.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <h2 className="mt-2"><Badge variant="secondary">9:00 am</Badge> Building the New Facebook with React, GraphQL and Relay /w Jane Doe</h2>
                                            <p>Open source projects like React, GraphQL and Relay are powering more and more Facebook services. In this session, we'll discuss how we use the latest features of these technologies, like React Suspense, to help deliver a high quality, modern web experience at Facebook.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <h2 className="mt-2"><Badge variant="secondary">10:00 am</Badge> Snack Break & Networking</h2>
                                            <p>Get yourself your favorite Snack with your fellow attendees.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Tab>
                    <Tab eventKey="day2" title="Day 2 · December 21">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                            <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first"><Badge variant="secondary">7:00 am</Badge><br/>Arrivals</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"><Badge variant="secondary">7:30 am</Badge><br/>Breakfast & Networking</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third"><Badge variant="secondary">8:30 am</Badge><br/>React Developer Tooling /w Steve Doe</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth"><Badge variant="secondary">9:00 am</Badge><br/>Data Fetching With Suspense In Relay /w Brad Doe</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth"><Badge variant="secondary">10:00 am</Badge><br/>Snack Break & Networking</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <h2 className="mt-2"><Badge variant="secondary">7:00 am</Badge> Arrivals</h2>
                                            <p>Waiting for attendees to arrive to the conference</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h2 className="mt-2"><Badge variant="secondary">7:30 am</Badge> Breakfast & Networking</h2>
                                            <p>Enjoy a tasty breakfast with your fellow attendees.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <h2 className="mt-2"><Badge variant="secondary">8:30 am</Badge> React Developer Tooling /w Steve Doe</h2>
                                            <p>React is an incredible framework for frontend development. It also facilitates mobile app development for multiple platforms. React was a game-changer for mobile app development services across the world, and developers were thrilled when Facebook announced its launch. This post explores the features of React developer tools.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <h2 className="mt-2"><Badge variant="secondary">9:00 am</Badge> Data Fetching With Suspense In Relay /w Brad Doe</h2>
                                            <p>Suspense is not a data fetching library. It's a mechanism for data fetching libraries to communicate to React that the data a component is reading is not ready yet. React can then wait for it to be ready and update the UI. At Facebook, we use Relay and its new Suspense integration.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <h2 className="mt-2"><Badge variant="secondary">10:00 am</Badge> Snack Break & Networking</h2>
                                            <p>Get yourself your favorite Snack with your fellow attendees.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}