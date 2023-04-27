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
import AngularLogo from '../assets/img/angular.png';
import TailwindLogo from '../assets/img/tailwind.png';
import TypeScriptLogo from '../assets/img/typescript.png';







function Skills() {

    const skills = [{url:HtmlLogo},{url:CssLogo},{url:JSLogo},{url:TypeScriptLogo},{url:SassLogo},{url:ReactLogo},{url:AngularLogo},{url:PhpLogo},{url:MySqlLogo},{url:LaravelLogo},{url:WordPressLogo},{url:TailwindLogo},]
    return (
    <section className='skill'>
        <Container>
            <Row>
                <h2  id='skills'>Skills</h2>
                <Col>
                <div className='skill-bx'>
                        {skills.map((skill)=>{
                            return(
                                <div className='item'>
                                    <img src={skill.url} alt="" />
                                </div>
                            )
                        })}
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Skills