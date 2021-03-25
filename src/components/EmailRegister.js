import React, { useState } from 'react';
import { Form, Col, Button, Row, Modal, Card } from 'react-bootstrap';
import classes from '../Classes.module.css';

export const EmailRegister = ({ alignment }) => {
	// state related to the modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// state related to the form
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [avatarLink, setAvatarLink] = useState('');
	const [breakfast, setBreakfast] = useState('Classic');
	const [snacks, setSnacks] = useState('Healthy');
	const [lunch, setLunch] = useState('Healthy');
	const [dinner, setDinner] = useState('Healthy');
	const [codeOfConductCompliance, setCodeOfConductCompliance] = useState(false);

	return (
		<>
			<Form>
				<Form.Group as={Row} size="sm" controlId="formGroupEmail">
					<Col sm="4" className={alignment === 'center' ? ' mx-auto ' : ''}>
						<Form.Control
							type="email"
							placeholder="Enter email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Button onClick={handleShow} className={classes.reactStyledButton}>
					Register
				</Button>
			</Form>

			<Modal
				show={show}
				onHide={handleClose}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Few More Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							size="sm"
							type="email"
							placeholder="Enter email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Form.Text className="text-muted">
							Your e-mail will be kept private and won't be shared.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicName">
						<Form.Label>Name</Form.Label>
						<Form.Control
							size="sm"
							placeholder="Enter Your Name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Form.Text className="text-muted">
							Your name will be shared in the 'Attendees' Page among other
							attendees of the conference.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicAvatar">
						<Form.Label>Avatar</Form.Label>
						<Form.Control
							size="sm"
							placeholder="Link to your Avatar"
							name="avatarLink"
							value={avatarLink}
							onChange={(e) => setAvatarLink(e.target.value)}
						/>
						<Form.Text className="text-muted">
							Your avatar will be shared in the 'Attendees' Page among other
							attendees of the conference.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicFoodOptions">
						<Form.Label>Food Options</Form.Label>
						<Row>
							<Col md={6}>
								<Card className="mb-2">
									<Card.Body>
										<Card.Text>Breakfast</Card.Text>
										<Form.Check
											custom
											type="radio"
											label="Classic"
											name="formRadiosBreakfast"
											id="formRadiosBreakfastClassic"
											value="Classic"
											checked={breakfast === 'Classic'}
											onChange={() => setBreakfast('Classic')}
										/>
										<Form.Check
											custom
											type="radio"
											label="English"
											name="formRadiosBreakfast"
											id="formRadiosBreakfastEnglish"
											value="English"
											checked={breakfast === 'English'}
											onChange={() => setBreakfast('English')}
										/>
										<Form.Check
											custom
											type="radio"
											label="No preference"
											name="formRadiosBreakfast"
											id="formRadiosBreakfastNoPreference"
											value="No preference"
											checked={breakfast === 'No preference'}
											onChange={() => setBreakfast('No preference')}
										/>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6}>
								<Card className="mb-2">
									<Card.Body>
										<Card.Text>Snacks</Card.Text>
										<Form.Check
											custom
											type="radio"
											label="Healthy"
											name="formRadiosSnacks"
											id="formRadiosSnacksHealthy"
											value="Healthy"
											checked={snacks === 'Healthy'}
											onChange={() => setSnacks('Healthy')}
										/>
										<Form.Check
											custom
											type="radio"
											label="Regular"
											name="formRadiosSnacks"
											id="formRadiosSnacksRegular"
											value="Regular"
											checked={snacks === 'Regular'}
											onChange={() => setSnacks('Regular')}
										/>
										<Form.Check
											custom
											type="radio"
											label="No preference"
											name="formRadiosSnacks"
											id="formRadiosSnacksNoPreference"
											value="No preference"
											checked={snacks === 'No preference'}
											onChange={() => setSnacks('No preference')}
										/>
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col md={6}>
								<Card className="mb-2">
									<Card.Body>
										<Card.Text>Lunch</Card.Text>
										<Form.Check
											custom
											type="radio"
											label="Healthy"
											name="formRadiosLunch"
											id="formRadiosLunchHealthy"
											value="Healthy"
											checked={lunch === 'Healthy'}
											onChange={() => setLunch('Healthy')}
										/>
										<Form.Check
											custom
											type="radio"
											label="Fast Food"
											name="formRadiosLunch"
											id="formRadiosLunchFastFood"
											value="Fast Food"
											checked={lunch === 'Fast Food'}
											onChange={() => setLunch('Fast Food')}
										/>
										<Form.Check
											custom
											type="radio"
											label="No preference"
											name="formRadiosLunch"
											id="formRadiosLunchNoPreference"
											value="No Preference"
											checked={lunch === 'No Preference'}
											onChange={() => setLunch('No Preference')}
										/>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6}>
								<Card className="mb-2">
									<Card.Body>
										<Card.Text>Dinner</Card.Text>
										<Form.Check
											custom
											type="radio"
											label="Healthy"
											name="formRadiosDinner"
											id="formRadiosDinnerHealthy"
											value="Healthy"
											checked={dinner === 'Healthy'}
											onChange={() => setDinner('Healthy')}
										/>
										<Form.Check
											custom
											type="radio"
											label="Fast Food"
											name="formRadiosDinner"
											id="formRadiosDinnerFastFood"
											value="Fast Food"
											checked={dinner === 'Fast Food'}
											onChange={() => setDinner('Fast Food')}
										/>
										<Form.Check
											custom
											type="radio"
											label="No preference"
											name="formRadiosDinner"
											id="formRadiosDinnerNoPreference"
											value="No preference"
											checked={dinner === 'No preference'}
											onChange={() => setDinner('No preference')}
										/>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Form.Group>

					<Form.Group controlId="formBasicCheckbox">
						<Form.Check
							custom
							type="checkbox"
							label="By checking this, you agree to comply with the Code Of Conduct"
							onChange={(e) => setCodeOfConductCompliance(e.target.checked)}
							checked={codeOfConductCompliance}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={handleClose}
						className="rounded-0"
					>
						Close
					</Button>
					<Button onClick={handleClose} className={classes.reactStyledButton}>
						Register
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
