import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
	Form,
	Col,
	Button,
	Row,
	Modal,
	Card,
	Spinner,
	Alert,
} from 'react-bootstrap';
import { GoLinkExternal } from 'react-icons/go';
import classes from '../Classes.module.css';

export const EmailRegister = ({ alignment }) => {
	const [email, setEmail] = useState('');

	// state related to the modal
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	// state related to AlertRegister
	const [showAlert, setShowAlert] = useState(false);
	const [alertRegister, setAlertRegister] = useState({
		variant: '',
		heading: '',
		body: '',
	});

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email('Must be a valid email address')
			.required('Email is required'),
		fullName: Yup.string().required('Full name is required'),
		picture: Yup.string()
			.matches(
				/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i,
				'Enter correct image URL'
			)
			.required('URL required'),
	});

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

			<Formik
				enableReinitialize
				initialValues={{
					email: email,
					fullName: '',
					picture: '',
					breakfast: 'No Preference',
					snacks: 'No Preference',
					lunch: 'No Preference',
					dinner: 'No Preference',
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					// Constructing the attendee object
					const newAttendee = {
						email: values.email,
						fullName: values.fullName,
						picture: values.picture,
						foodOptions: {
							breakfast: values.breakfast,
							snacks: values.snacks,
							lunch: values.lunch,
							dinner: values.dinner,
						},
					};

					setSubmitting(true);

					axios
						.post(
							'https://dummy-react-conf-backend.herokuapp.com/api/attendees',
							newAttendee
						)
						.then((res) => {
							// Succesfully added new attendee
							setShowAlert(true);
							setAlertRegister({
								variant: 'success',
								heading: `Attendee ${res.data.fullName} Added Successfully!`,
							});
							resetForm();
							setEmail('');
							setSubmitting(false);
						})
						.catch((err) => {
							setShowAlert(true);
							setAlertRegister({
								variant: 'danger',
								heading: `Something went wrong!`,
								body: `${err.response.data}`,
							});
							setSubmitting(false);
						});
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<Modal
						show={showModal}
						onHide={handleClose}
						aria-labelledby="contained-modal-title-vcenter"
						centered
					>
						<Modal.Header closeButton>
							<Modal.Title>Few More Information</Modal.Title>
						</Modal.Header>
						<Form noValidate onSubmit={handleSubmit}>
							<Modal.Body>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										size="sm"
										type="text"
										name="email"
										placeholder="Enter email"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
										isValid={touched.email && !errors.email}
										isInvalid={!!errors.email}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.email}
									</Form.Control.Feedback>
									<Form.Text muted>
										Your e-mail will be kept private and won't be shared.
									</Form.Text>
								</Form.Group>

								<Form.Group controlId="formBasicName">
									<Form.Label>Full Name</Form.Label>
									<Form.Control
										size="sm"
										type="text"
										name="fullName"
										placeholder="Enter Full Name"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.fullName}
										isValid={touched.fullName && !errors.fullName}
										isInvalid={!!errors.fullName}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.fullName}
									</Form.Control.Feedback>
									<Form.Text muted>
										Your full name will be shared in the 'Attendees' Page among
										other attendees of the conference.
									</Form.Text>
								</Form.Group>

								<Form.Group controlId="formBasicAvatar">
									<Form.Label>Picture</Form.Label>
									<Form.Control
										size="sm"
										type="text"
										name="picture"
										placeholder="Link to your picture"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.picture}
										isValid={touched.picture && !errors.picture}
										isInvalid={!!errors.picture}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.picture}
									</Form.Control.Feedback>
									<Form.Text muted>
										Acepted formats: jpg, jpeg, png, gif, svg
										<br />
										Your picture will be shared in the 'Attendees' Page among
										other attendees of the conference.
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
														name="breakfast"
														id="formRadiosBreakfastClassic"
														value="Classic"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<Form.Check
														custom
														type="radio"
														label="English"
														name="breakfast"
														id="formRadiosBreakfastEnglish"
														value="English"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<Form.Check
														custom
														type="radio"
														label="No preference"
														name="breakfast"
														id="formRadiosBreakfastNoPreference"
														value="No Preference"
														onChange={handleChange}
														onBlur={handleBlur}
														defaultChecked
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
														name="snacks"
														id="formRadiosSnacksHealthy"
														value="Healthy"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<Form.Check
														custom
														type="radio"
														label="Regular"
														name="snacks"
														id="formRadiosSnacksRegular"
														value="Regular"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<Form.Check
														custom
														type="radio"
														label="No preference"
														name="snacks"
														id="formRadiosSnacksNoPreference"
														value="No Preference"
														onChange={handleChange}
														onBlur={handleBlur}
														defaultChecked
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
														name="lunch"
														id="formRadiosLunchHealthy"
														value="Healthy"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<Form.Check
														custom
														type="radio"
														label="Fast Food"
														name="lunch"
														id="formRadiosLunchFastFood"
														value="Fast Food"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<Form.Check
														custom
														type="radio"
														label="No preference"
														name="lunch"
														id="formRadiosLunchNoPreference"
														value="No Preference"
														onChange={handleChange}
														onBlur={handleBlur}
														defaultChecked
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
														name="dinner"
														id="formRadiosDinnerHealthy"
														value="Healthy"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<Form.Check
														custom
														type="radio"
														label="Fast Food"
														name="dinner"
														id="formRadiosDinnerFastFood"
														value="Fast Food"
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<Form.Check
														custom
														type="radio"
														label="No preference"
														name="dinner"
														id="formRadiosDinnerNoPreference"
														value="No Preference"
														onChange={handleChange}
														onBlur={handleBlur}
														defaultChecked
													/>
												</Card.Body>
											</Card>
										</Col>
									</Row>
								</Form.Group>

								<p>
									<strong>
										By filling this form, you agree to comply with the{' '}
										<a
											href="/code-of-conduct"
											target="_blank"
											rel="noopener noreferrer"
										>
											Code Of Conduct <GoLinkExternal />
										</a>
									</strong>
								</p>
								{showAlert && (
									<Alert
										variant={alertRegister.variant}
										onClose={() => setShowAlert(false)}
										dismissible
									>
										<Alert.Heading>{alertRegister.heading}</Alert.Heading>
										<p>
											{alertRegister.body}
											{alertRegister.variant === 'success' && (
												<>
													<li>
														You can view your name among other attendees in the{' '}
														<a
															href="/attendees"
															target="_blank"
															rel="noopener noreferrer"
														>
															Attendees Page <GoLinkExternal />
														</a>
													</li>
													<li>Or you can submit a new Registration</li>
												</>
											)}
										</p>
									</Alert>
								)}
							</Modal.Body>
							<Modal.Footer>
								<Button
									variant="secondary"
									onClick={handleClose}
									className="rounded-0"
								>
									Close
								</Button>
								<Button
									type="submit"
									disabled={isSubmitting}
									className={classes.reactStyledButton}
								>
									{isSubmitting ? (
										<>
											<Spinner animation="border" size="sm" className="mr-2" />
											Registering
										</>
									) : (
										'Register'
									)}
								</Button>
							</Modal.Footer>
						</Form>
					</Modal>
				)}
			</Formik>
		</>
	);
};
