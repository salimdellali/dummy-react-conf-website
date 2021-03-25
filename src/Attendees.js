import React, { useState, useEffect } from 'react';
import { PageHeading } from './components/PageHeading';
import { Container, Media, Image, Row, Col, Spinner } from 'react-bootstrap';

export const Attendees = () => {
	const [attendees, setAttendees] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://dummy-react-conf-backend.herokuapp.com/api/attendees')
			.then((response) => response.json())
			.then((data) => {
				setAttendees(data);
				setLoading(false);
			});
	}, []);

	return (
		<>
			<PageHeading
				pageTitle="React Conf Attendees"
				pageDescription="Meet your fellow attendees"
			/>

			<Container>
				{loading ? (
					<Row>
						<Spinner animation="grow" className="mr-2" />
						<h3>Loading attendees ...</h3>
					</Row>
				) : attendees.length === 0 ? (
					<Row>
						<h3>There is no attendees registered yet :(</h3>
					</Row>
				) : (
					<Row>
						{attendees.map((person, index) => {
							return (
								<Col lg={3} md={6} className="mb-4" key={index}>
									<Media className="align-items-center">
										<Image
											width={64}
											height={64}
											className="mr-3"
											style={{ objectFit: 'cover' }}
											src={person.picture}
											alt={person.fullName}
											roundedCircle
										/>
										<Media.Body>
											<h6>{person.fullName}</h6>
										</Media.Body>
									</Media>
								</Col>
							);
						})}
					</Row>
				)}
			</Container>
		</>
	);
};
