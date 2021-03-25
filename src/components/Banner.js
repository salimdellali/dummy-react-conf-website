import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container } from 'react-bootstrap';
import banner from '../assets/banner-bg2.png';
import { EmailRegister } from '../components/EmailRegister';

const style = {
	backgroundImage: `url(${banner})`,
	backgroundSize: 'cover',
	borderRadius: 0,
};

export const Banner = (props) => {
	const {
		title,
		shortDescription,
		dates,
		startTime,
	} = props.overview.conferenceInformation;

	const conferenceDates = dates.map((date) => new Date(date).toDateString());

	const [timerDays, setTimerDays] = useState(0);
	const [timerHours, setTimerHours] = useState(0);
	const [timerMinutes, setTimerMinutes] = useState(0);
	const [timerSeconds, setTimerSeconds] = useState(0);
	const [timerExpired, setTimerExpired] = useState(false);

	let interval = useRef();

	const startTimer = () => {
		// const countDownDate = new Date('Dec 21, 2021 08:30:00').getTime();
		const countDownDate = new Date(startTime).getTime();
		// const countDownDate = startTime.getTime();

		// Update the count down every 1 second
		interval = setInterval(() => {
			// Get today's date and time
			const now = new Date().getTime();

			// Find the distance between now and the count down date
			const distance = countDownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// check if the count down is finished
			if (distance < 0) {
				// Stop our timer
				setTimerExpired(true);
				clearInterval(interval.current);
			} else {
				// Update our timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	if (startTime !== '1970-01-01T00:00:00.000Z') startTimer();

	// ComponentDidMount
	useEffect(() => {
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			clearInterval(interval.current);
		};
	});

	return (
		<Jumbotron style={style}>
			<Container className="text-white">
				<h1>{title}</h1>
				<h5>{shortDescription}</h5>
				<h4>
					{timerExpired
						? 'HAPPENING NOW!'
						: `${timerDays}d :: ${timerHours}h :: ${timerMinutes}m :: ${timerSeconds}s`}
				</h4>
				<p>{conferenceDates.join(' · ')}</p>
				<EmailRegister />
			</Container>
		</Jumbotron>
	);
};

Banner.propTypes = {
	overview: PropTypes.object.isRequired,
};
