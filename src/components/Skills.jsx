import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import HtmlLogo from '../assets/img/html.png';
import CssLogo from '../assets/img/css.png';
import JSLogo from '../assets/img/js.png';
import ReactLogo from '../assets/img/react.png';
import SassLogo from '../assets/img/sass.png';
import PhpLogo from '../assets/img/php.png';
import LaravelLogo from '../assets/img/laravel.png';
import MySqlLogo from '../assets/img/mysql.png';
import WordPressLogo from '../assets/img/wordpress.png';









function Skills() {
    return (
    <section className='skill'>
        <Container>
            <Row>
                <h2  id='skills'>Skills</h2>
                <Col>
                <div className='skill-bx'>
                            <div className='item'>
                                <img src={HtmlLogo} alt=""/>
                            </div>
                            <div className='item'>
                                <img src={CssLogo} alt=""/>
                            </div>
                            <div className='item'>
                                <img src={JSLogo} alt=""/>
                            </div>
                        
                            <div className='item'>
                                <img src={SassLogo} alt=""/>
                            </div>
                            <div className='item'>
                                <img src={ReactLogo} alt=""/>
                            </div>
                            <div className='item'>
                                <img src={PhpLogo} alt=""/>
                            </div>
                        
                            <div className='item'>
                                <img src={MySqlLogo} alt=""/>
                            </div>
                            <div className='item'>
                                <img src={LaravelLogo} alt=""/>
                            </div>
                            <div className='item'>
                                <img src={WordPressLogo} alt=""/>
                            </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Skills