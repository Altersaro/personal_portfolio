import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Me from "../assets/img/me.jpg";

import 'animate.css';


function Banner() {

    const[loopNum, setLoopNum] = React.useState(0);
    const[isDeleting, setIsDeleting] = React.useState(false);
    const toRotate = ["Full-Stack Web Developer", "Front-end Developer", "Back-end Developer"]
    const [text, setText] = React.useState('');
    const [delta, setDelta] = React.useState(300 - Math.random() * 100);
    const period = 2000;

    React.useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () =>{clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum +1);
        setDelta(500);
        }
    }


  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={6}>
                        <div className="animate__animated animate__fadeInLeft">
                            <span className='tagline'> Welcome to my Portfolio </span>
                            <h1>{`Hi i'm Rosario Luca Linguanti `} <span className='wrap'>{text}</span></h1>
                            <p>I’ve always loved experimenting and creating something from scratch, programming has made this dream possible.I enjoy to create functional websites with impactful design that make the user experience rewarding and unique also I am passionate about video games and technology. </p>
                        </div>
                </Col> 
                <Col xs={12} md={6} xl={6} className='d-flex justify-content-end'>
                    <img src={Me} alt="Headder Img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}


export default Banner