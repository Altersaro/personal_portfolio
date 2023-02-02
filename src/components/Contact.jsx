import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import emailjs from '@emailjs/browser';



function Contact() {


    const[buttonText, setButtonText] = React.useState('Send');
    const[status, setStatus] = React.useState({});

        const form = React.useRef();
    
        const sendEmail = (e) => {
            e.preventDefault();
            setButtonText("Sending...");
        emailjs.sendForm('service_mail', 'template_48roasu', form.current, 'user_XLk1hjsK9I1y3yP0e3NqT')
            .then((result) => {
                console.log(result.text);
                setStatus({ succes: true, message: 'Message sent successfully'});
                setButtonText("Sendend");
                window.location.reload();

            }, (error) => {
                console.log(error.text);
                setStatus({ succes: false, message: 'Something went wrong, please try again later.'});

            });
        };

return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='Contact Us'/>
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col sm={6} className='px-1' >
                                <input type="text" name='user_name' placeholder='First Name' required/>
                            </Col>
                            <Col sm={6} className='px-1' >
                            <input type="text" name='user_last_name' placeholder='Last Name' required/>
                            </Col>
                            <Col sm={6} className='px-1' >
                            <input type="email" name='user_email' placeholder='Email' required/>
                            </Col>
                            <Col sm={6} className='px-1' >
                            <input type="tel" name='user_tel' placeholder='Phone Number' required/>
                            </Col>
                            <Col sm={6} className='px-1 last-input' >
                                <textarea row='6' name='message' placeholder='Message' required/>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                <p className={status.success === false ? 'danger popup':'success popup'} >{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact