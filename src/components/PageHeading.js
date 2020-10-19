import React from 'react';
import PropTypes from 'prop-types';

import { Jumbotron, Container } from 'react-bootstrap';
import classes from '../Classes.module.css'

export const PageHeading = ({ pageTitle, pageDescription}) => (
    <Jumbotron className={classes.pageHeading}>
        <Container className="text-white">
            <h1>{pageTitle}</h1>
            <h5>{pageDescription}</h5>
        </Container>
    </Jumbotron>
)

PageHeading.propTypes = {
    pageTitle: PropTypes.string,
    pageDescription: PropTypes.string
  };