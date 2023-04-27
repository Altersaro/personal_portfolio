import React from 'react'
import { Col, Row, Container} from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import yourgameslist from '../assets/img/yougameslist.png';
import newsApp from '../assets/img/newsapp.png';
import onlineCounter from '../assets/img/Online-counter.png';
import veggieRecipe from '../assets/img/veggieRecipe.png';
import lyriks from '../assets/img/Lyriks.png';






function Projects() {

    const projects=[
        {
            title: "YourGameList",
            description: "Games",
            imgUrl:yourgameslist,
            url:'https://your-game-list.vercel.app/'
        },
        {
            title: "Veggie Recipe",
            description: "A recipe app",
            imgUrl: veggieRecipe,
            url: 'https://vegetarian-recipe-app.vercel.app/'
        },
        {
            title:'Lyriks App',
            description:"Clone streaming music app",
            imgUrl: lyriks,
            url:'https://lyriks-1p4v.vercel.app/'
        },
        {
            title: "News App",
            description: "Design & Development",
            imgUrl: newsApp,
            url:'https://altersaro-news-app.vercel.app/'
        },
        {
            title: "Counter App",
            description: "Design & Development",
            imgUrl: onlineCounter,
            url:'https://onlinecounter.vercel.app/'
        },
        
    ];
    return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                    <h2 className='p-2'>Projects</h2>
                    <p>These are my best projects</p>
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}/>
                                            )

                                        })
                                    }
                                </Row>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Projects