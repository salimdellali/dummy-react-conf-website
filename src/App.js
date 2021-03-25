import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import the website pages
import { Home } from './Home';
import { Schedule } from './Schedule';
import { Location } from './Location';
import { Food } from './Food';
import { CodeOfConduct } from './CodeOfConduct';
import { Attendees } from './Attendees';
import { PageNotFound } from './PageNotFound';

// import the components
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { CallToAction } from './components/CallToAction';

function App() {
	const [overview, setOverview] = useState({
		conferenceInformation: {
			dates: ['2021-12-20T23:00:00.000Z', '2021-12-21T23:00:00.000Z'],
			_id: '6045edc72bc8f2eefffcb2de',
			title: 'React Conf 2020',
			shortDescription:
				'Two full days of knowledge sharing and community with people who craft with React.',
			longDescription:
				'This year’s conference features a mix of panels and talks set against the backdrop of beautiful Lake Las Vegas. In addition to a can’t-miss schedule, we’re organizing off-hour activities providing opportunities for relaxation, adventure, and getting to other React enthusiasts.',
			startTime: '2021-12-22T08:30:00.000Z',
		},
		numberOfSpeakers: 0,
		numberOfAttendees: 0,
		numberOfSessions: 0,
	});
	// const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://dummy-react-conf-backend.herokuapp.com/api/overview')
			.then((response) => response.json())
			.then((data) => {
				setOverview(data);
				// setLoading(false);
			});
	}, []);

	return (
		<div id="page-container">
			<div id="content-wrap">
				<BrowserRouter>
					<header>
						<Menu title={overview.conferenceInformation.title} />
					</header>
					<main>
						<Switch>
							<Route
								exact
								path="/"
								render={() => <Home overview={overview} />}
							/>
							<Route exact path="/schedule" component={Schedule} />
							<Route exact path="/location" component={Location} />
							<Route exact path="/food" component={Food} />
							<Route exact path="/code-of-conduct" component={CodeOfConduct} />
							<Route exact path="/attendees" component={Attendees} />
							<Route component={PageNotFound} />
						</Switch>
					</main>
				</BrowserRouter>
			</div>
			<footer id="footer">
				<CallToAction />
				<Footer />
			</footer>
		</div>
	);
}

export default App;
