import React from 'react'
import { PageHeading } from './components/PageHeading';
import { Container } from 'react-bootstrap'

export const PageNotFound = () => (
    <>
        <PageHeading 
            pageTitle="404"
            pageDescription="Page Not Found"    
        />
        <Container>
            <p>It seems like your requested page doesn't exist, go back to the <a href="/">Home Page</a></p>
        </Container>
    </>
)