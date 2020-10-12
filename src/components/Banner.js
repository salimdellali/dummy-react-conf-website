import React from 'react'
import { Jumbotron, Button, Form, Col, Row, Container } from 'react-bootstrap';
// import banner from '../assets/banner-bg.jpg';
import banner from '../assets/banner-bg2.png';
import classes from '../Classes.module.css'

const style = {
    backgroundImage : `url(${banner})`,
    backgroundSize: "cover",
    borderRadius: 0
}

export const Banner = () => (
    <Jumbotron style={style}>
        <Container className="text-white">
            <h1>React Conf 2020</h1>
            <h5>Two full days of knowledge sharing and community with people who craft with React.</h5>
            <p>December 20 · 21 | 8:30am PDT</p>
            <Form>
                <Form.Group as={Row} size="sm" controlId="formGroupEmail">
                    <Col sm="4">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Col>
                </Form.Group>
                <Button className={classes.reactStyledButton} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    </Jumbotron>
)