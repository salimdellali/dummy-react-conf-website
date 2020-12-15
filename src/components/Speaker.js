import React from 'react';
import { Image, Card, Col } from 'react-bootstrap';
import { FaTwitterSquare } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';

export const Speaker = ({ speakerDetails }) => {
	const firstName = speakerDetails.name.first;
	const lastName = speakerDetails.name.last;
	const fullName = firstName + ' ' + lastName;
	const profession = speakerDetails.profession;
	const picture = speakerDetails.picture.large;
	const twitterAccount = (firstName + lastName).split(' ').join('');
	const twitterLink = 'https://twitter.com/' + twitterAccount;

	return (
		<Col lg={3} md={6} className="mb-4">
			<Card className="align-items-center text-center">
				<Card.Body>
					<Card.Title>{fullName}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						{profession}
					</Card.Subtitle>
					<Card.Text>
						<Image src={picture} roundedCircle />
					</Card.Text>
					<Card.Link
						href={twitterLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitterSquare /> @{twitterAccount} <GoLinkExternal />
					</Card.Link>
				</Card.Body>
			</Card>
		</Col>
	);
};
