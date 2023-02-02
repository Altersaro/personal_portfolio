import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({title, description, imgUrl, url}) {
  return (
    <Col size={12} sm={6} md={6}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="" />
            <div className='proj-txtx'>
                <h4><a href={url} target='_blank' rel='noreferrer'>{title}</a></h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard