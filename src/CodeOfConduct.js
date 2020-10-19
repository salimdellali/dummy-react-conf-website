import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

export const CodeOfConduct = () => {
    return (
        <>
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h1>Code Of Conduct</h1>
                        <p>All delegates, speakers and volunteers at React Conf are required to agree with the following code of conduct. Organizers will enforce this code throughout the event.</p>
                        <h2>The Quick Version</h2>
                        <p>Facebook is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks.
                        <br />
                        Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>
                        <h2>The Less Quick Version</h2>
                        <p>Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
                        <br />
                        Participants asked to stop any harassing behavior are expected to comply immediately.
                        <br />
                        If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
                        <br />
                        If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately.
                        <br />
                        Conference staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.
                        <br />
                        We expect participants to follow these rules at all conference venues and conference-related social events.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}