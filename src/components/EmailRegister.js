import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import classes from '../Classes.module.css'

export const EmailRegister = ({ alignment }) => (
    <Form>
        <Form.Group as={Row} size="sm" controlId="formGroupEmail">
            <Col sm="4" className={ alignment === "center" ? " mx-auto " : "" }>
                <Form.Control type="email" placeholder="Enter email"/>
            </Col>
        </Form.Group>
        <Button className={classes.reactStyledButton}
         type="submit">
            Register
        </Button>
    </Form>
)