import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import { Row, Col, Card, Container, Spinner } from 'react-bootstrap';
import { Speaker } from './components/Speaker';
import { Banner } from './components/Banner';

export const Home = (props) => {
	const { overview } = props;

	const [speakers, setSpeakers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://dummy-react-conf-backend.herokuapp.com/api/speakers')
			.then((response) => response.json())
			.then((data) => {
				setSpeakers(data);
				setLoading(false);
			});
	}, []);

	return (
		<>
			<Banner overview={overview} />

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
								{overview.conferenceInformation.longDescription}
							</Card.Text>
						</Card.Body>
					</Card>
				</Row>

				<Row className="mb-4">
					<Col>
						<h1>Speakers</h1>
					</Col>
				</Row>

				{loading ? (
					<Row className="mb-4">
						<Spinner animation="grow" className="mr-2" />
						<h3>Loading Speakers ...</h3>
					</Row>
				) : speakers.length === 0 ? (
					<Row className="mb-4">
						<h3>There is no speakers yet :(</h3>
					</Row>
				) : (
					<Row>
						{speakers.map((speakerDetails, index) => {
							return <Speaker key={index} speakerDetails={speakerDetails} />;
						})}
					</Row>
				)}
			</Container>
		</>
	);
};

Home.propTypes = {
	overview: PropTypes.object.isRequired,
};
