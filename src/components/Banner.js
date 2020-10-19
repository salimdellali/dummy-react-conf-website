import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';
// import banner from '../assets/banner-bg.jpg';
import banner from '../assets/banner-bg2.png';
import { EmailRegister } from '../components/EmailRegister';

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
            <EmailRegister />
        </Container>
    </Jumbotron>
)