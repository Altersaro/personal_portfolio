import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/MyLogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



function NavBar() {

    const [activeLink, setActiveLink] = React.useState('home');
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.addEventListener("scroll", onScroll); 
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href ="https://www.linkedin.com/in/rosario-luca-linguanti/" target='_blank' rel='noreferrer'><img src={navIcon1} alt =""/></a>
                <a href ="https://www.facebook.com/rosario.linguanti.5" target='_blank' rel='noreferrer'><img src={navIcon2} alt =""/></a>
                <a href ="https://www.instagram.com/rosario_linguanti_" target='_blank' rel='noreferrer'><img src={navIcon3} alt =""/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar