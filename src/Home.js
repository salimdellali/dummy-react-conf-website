import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Speaker } from './components/Speaker';
import { Banner } from './components/Banner';

export const Home = () => {
	const [speakers, setSpeakers] = useState([]);

	useEffect(() => {
		fetch('https://dummy-react-conf-backend.herokuapp.com/api/speakers')
			.then((response) => response.json())
			.then((data) => {
				setSpeakers(data);
			});
	}, []);

	return (
		<>
			<Banner />

			<Container>
				<Row className="mb-4">
					<Card className="flex-md-row align-items-md-center">
						<Card.Img
							variant="center"
							src={logo}
							className="App-logo"
							alt="logo"
						/>
						<Card.Body>
							<Card.Text className="description">
								This year’s conference features a mix of panels and talks set
								against the backdrop of beautiful Lake Las Vegas. In addition to
								a can’t-miss schedule, we’re organizing off-hour activities
								providing opportunities for relaxation, adventure, and getting
								to other React enthusiasts.
							</Card.Text>
						</Card.Body>
					</Card>
				</Row>

				<Row className="mb-4">
					<Col>
						<h1>Speakers</h1>
					</Col>
				</Row>

				<Row>
					{speakers.map((speakerDetails, index) => {
						return <Speaker key={index} speakerDetails={speakerDetails} />;
					})}
				</Row>
			</Container>
		</>
	);
};
