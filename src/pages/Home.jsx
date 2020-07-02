import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Row, Col, Container} from 'react-bootstrap';


import qiana from '../img/qiana.png';
import Resume from '../pdf/Qiana Barton Resume.pdf';


export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Header/>
                <About/>
                <Comp/>
                <Experience/>
                <ParallaxBG/>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className="parallax-wrapper header text-center">
                <div className="center">
                    <h1 className="mb-4">Hi, I'm
                        <span className="accent"> Qiana</span>.</h1>
                    <h2>UX Interaction Designer & Developer</h2>

                    <Button className="mt-5 header-button" href="/projects">View My Work</ Button>
                </div>
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div className="static-wrapper padding80">
                <Container className="">
                    <Row>
                        <Col sm={8}>
                            <h3 className="mb-4">Who is
                                <span className="accent"> Qiana</span>?</h3>
                            <p>I’m a UX designer that can also code. I think Sketch is the best thing since sliced bread and I love prototyping. In my free time you can usually find me helping out friend with their website or logo.  I’ve also been working on become a SwiftUI Master to improve upon my iOS dev skills. When I’m not working on one of my latest project ideas, I’m usually working out, making green smoothies or gardening. People say that I have too many plants.</p>

                            <p className="light">
                            Btw, I  designed and coded this website myself from scratch using React.
                            </p>

                        </Col>
                        <Col sm={4}>
                            <div className="spacer20 d-md-none"/>
                            <img className="qiana-pic" src={qiana} alt=""></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class Comp extends Component {
    render() {
        return (
            <a href="/projects">
            <div className="parallax-wrapper comp-bg"></div>
            </a>
        );
    }
}

class ParallaxBG extends Component {
    render() {
        return (
            <div className="parallax-wrapper bottom-bg"></div>
        );
    }
}

class Experience extends Component {
    render() {
        return (
            <div className="static-wrapper padding80">
                <Container>
                    <Row>
                        <Col sm={7}>
                            <h3 className="mb-4">Experience</h3>
                            <p>I started out my career as a QA Tester, but after a lot independent study and work on personal projects, I was able to land my first two design roles working full time days at Cercacor and spending my evenings as a contractor for Sporttrade. I worked as a hybrid designer in both of these roles.

                            <br/><br/><span className="bold">I have experience with wireframing, designing mobile UI’s, annotating design documents for developer hand-off, creating dynamic prototypes, micro interactions, using Wordpress, GIT and contributing to the iOS code repositories.</span> 

                            <br/><br/>For more details about my work history,
                            <a className="project-link" href={Resume} target = "_blank"> view my resume.</a>
                            </p>

                            <ul>
                                <li>
                                    <h6>Sketch</h6>
                                </li>
                                <li>
                                    <h6>Swift / SwiftUI</h6>
                                </li>
                                <li>
                                    <h6>Framer / Invision Studio</h6>
                                </li>
                                <li>
                                    <h6>React / HTML / CSS</h6>
                                </li>
                                <li>
                                    <h6>After Effects / Lottie</h6>
                                </li>

                            </ul>
 

                        </Col>
                        <Col sm={5} className="">
                        <div className="spacer20 d-md-none"/>

                            <div className="mb-4">
                                <h4 className="blue-accent">UX INTERACTION DESIGNER</h4>
                                <h5>AUGUST 2018 - MAY 2020</h5>
                                <p>Cercacor Labs, Irvine, California</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="blue-accent" >FRONT END iOS Dev & Designer</h4>
                                <h5>AUGUST 2018 - March 2019</h5>
                                <p>Sporttrade Inc., Contracted Remotely</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="blue-accent">QA Engineer</h4>
                                <h5>June 2016 - May 2018</h5>
                                <p>Grass Valley, Hillsboro, Oregon</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}