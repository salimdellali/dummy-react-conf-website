import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Row, Col, Nav, Badge, Container } from 'react-bootstrap';
import { PageHeading } from './components/PageHeading';

export const Schedule = () => {
	const [schedules, setSchedules] = useState([]);

	useEffect(() => {
		fetch('https://dummy-react-conf-backend.herokuapp.com/api/schedules')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setSchedules(data);
			});
	}, []);

	return (
		<>
			<PageHeading
				pageTitle="The Schedule"
				pageDescription="The React Conf Agenda"
			/>

			<Container>
				<div className="mb-4">
					<Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
						{schedules.map((day, index) => (
							<Tab key={index} eventKey={index} title={day.description}>
								<Tab.Container id="left-tabs-example" defaultActiveKey="1">
									<Row>
										<Col sm={3}>
											<Nav variant="pills" className="flex-column">
												{day.sessions.map((session, index) => (
													<Nav.Item key={index}>
														<Nav.Link eventKey={index + 1}>
															<Badge variant="secondary">{session.time}</Badge>
															<br /> {session.name}{' '}
															{session.speakers.length > 0
																? '/w ' + session.speakers.toString()
																: ''}
														</Nav.Link>
													</Nav.Item>
												))}
											</Nav>
										</Col>
										<Col sm={9}>
											<Tab.Content>
												{day.sessions.map((session, index) => (
													<Tab.Pane key={index} eventKey={index + 1}>
														<h2 className="mt-2">
															<Badge variant="secondary">{session.time}</Badge>{' '}
															{session.name}
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
		</>
	);
};
