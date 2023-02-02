import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <Col className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/rosario-luca-linguanti/' target='_blank' rel='noreferrer'><img src={navIcon1} alt='social-icon'/></a>
                        <a href='https://www.facebook.com/rosario.linguanti.5' target='_blank' rel='noreferrer'><img src={navIcon2} alt='social-icon'/></a>
                        <a href='https://www.instagram.com/rosario_linguanti_' target='_blank' rel='noreferrer'><img src={navIcon3} alt='social-icon'/></a>
                    </div>
                  <p>CopyRight 2022. All Right Reserved Rosario Luca Linguanti</p>  
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer