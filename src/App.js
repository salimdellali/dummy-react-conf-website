import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import the website pages
import { Home } from './Home';
import { Schedule } from './Schedule';
import { Location } from './Location';
import { Food } from './Food';
import { CodeOfConduct } from './CodeOfConduct'

// import the components
import { Menu } from './components/Menu';

import { Footer } from './components/Footer';

function App() {
  return (
	  <div id="page-container">
		  <div id="content-wrap">
			  <BrowserRouter>
				  <header>
					  <Menu />
				  </header>
				  <main>
					  <Switch>
						  <Route exact path="/" component={Home} />
						  <Route exact path="/schedule" component={Schedule} />
						  <Route exact path="/location" component={Location} />
						  <Route exact path="/food" component={Food} />
						  <Route exact path="/code-of-conduct" component={CodeOfConduct} />
					  </Switch>
				  </main>
			  </BrowserRouter>
		  </div>
		  <footer id="footer">
			  <Footer />
		  </footer>
	  </div>
  );
}

export default App;
