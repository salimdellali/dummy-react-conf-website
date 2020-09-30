import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';

// import the website pages
import { Home } from './Home';
import { Schedule } from './Schedule';
import { Location } from './Location';
import { Food } from './Food';
import { CodeOfConduct } from './CodeOfConduct'

// import the components
import { Menu } from './components/Menu';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Banner />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/location" component={Location} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/code-of-conduct" component={CodeOfConduct} />
          </Switch>
        </Router>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
