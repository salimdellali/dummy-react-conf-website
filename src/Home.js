import React from 'react'
import logo from './logo.svg';
import { Row, Col, Card } from 'react-bootstrap';
import faker from 'faker';
import { FaTwitterSquare } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

export const Home = () => {
    
     const getSpeakers = () => {
        const speakers = []
        for (let i=0; i<4; i++) {
             
            let uuid = faker.random.uuid();

            let contextualCard = faker.helpers.contextualCard();
            let avatar = contextualCard.avatar;
            let name = contextualCard.name;
            let username = contextualCard.username;
            let twitterLink = "https://twitter.com/" + username;
           
            let speaker = 
            <Col md={3}>
                <Card key={uuid}>
                    <Card.Img variant="top" src={avatar}/>
                    <Card.Body className="align-items-center">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text><a href={twitterLink} target="_blank" rel="noopener noreferrer"><FaTwitterSquare /> @{username} <GoLinkExternal /></a></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            speakers.push(speaker);
        }
        console.log(speakers);
        return speakers;
    }

    return (
        <>
            <Row className="mb-4">
                <Card className="flex-md-row align-items-md-center">
                    <Card.Img variant="center" src={logo} className="App-logo" alt="logo" />
                    <Card.Body>
                        <Card.Text className="description">
                            This year’s conference features a mix of panels and talks set against the backdrop of beautiful Lake Las Vegas. In addition to a can’t-miss schedule, we’re organizing off-hour activities providing opportunities for relaxation, adventure, and getting to other React enthusiasts.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>

            <Row className="mb-4">
                <Col>
                    <h1>Speakers</h1>
                </Col>
            </Row>

            <Row className="mb-4">
                    {getSpeakers()}  
            </Row>

            <Row className="mb-4">          
                {getSpeakers()} 
            </Row>
        </>
    )
}