import React, { useState, useEffect } from 'react';
import {
	Tabs,
	Tab,
	Row,
	Col,
	Nav,
	Badge,
	Container,
	Spinner,
} from 'react-bootstrap';
import { PageHeading } from './components/PageHeading';

export const Schedule = () => {
	const [schedules, setSchedules] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			fetch('https://dummy-react-conf-backend.herokuapp.com/api/schedules')
				.then((response) => response.json())
				.then((data) => {
					setSchedules(data);
					setLoading(false);
				});
		}, 2000);
	}, []);

	return (
		<>
			<PageHeading
				pageTitle="The Schedule"
				pageDescription="The React Conf Agenda"
			/>

			<Container>
				{loading ? (
					<Row>
						<Spinner animation="grow" className="mr-2" />
						<h3>Loading the schedule ...</h3>
					</Row>
				) : schedules.length === 0 ? (
					<Row>
						<h3>The schedule is empty for now :(</h3>
					</Row>
				) : (
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
																<Badge variant="secondary">
																	{session.time}
																</Badge>
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
																<Badge variant="secondary">
																	{session.time}
																</Badge>{' '}
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
				)}
			</Container>
		</>
	);
};
