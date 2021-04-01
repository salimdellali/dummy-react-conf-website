import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import classes from '../Classes.module.css';
import { EmailRegister } from '../components/EmailRegister';

export const CallToAction = () => (
	<Jumbotron className={`${classes.callToAction} text-white text-center mb-0`}>
		<h1>Don't Miss the React Conf 2020</h1>
		<h5>Apply Now</h5>
		<EmailRegister alignment="center" />
	</Jumbotron>
);
