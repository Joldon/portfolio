import React from 'react'
// import Projects from './Projects'
import { repos } from './data'
import '../App.css'
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';

const ProjectsList = () => {
    return (
    <div className='ProjectsList mb-5'>
        {repos.map((repo, index) => {
          return (
            <Card key={index} className="Project text-white bg-dark color-light border-success">
                <CardImg className="img-fluid" top width="100%" src={repo.image} alt='' />
                <CardBody>
                    <CardTitle tag="h4">{repo.title}</CardTitle>
                    <CardSubtitle tag="h5" className="mb-2 text-muted">{repo.subtitle}</CardSubtitle>
                    <CardText tag='h6'>{repo.description}</CardText>
                    <Button type='button' className='Live btn me-md-2' href={repo.livelink} target='blank'>live</Button>
                    <Button type='button' className='Code btn ms-md-2' href={repo.codelink} target='blank'>code</Button>
                </CardBody>
            </Card>
          );
        })}

      {/* {repos.map((repo) => (
        <a
          href={repo.link}
          key={repo.image}
          >
            <div>
              <img
              alt='gallery'
              src={repo.image} 
              />
            </div>
              <div>
                <h2>
                  {repo.subtitle}
                </h2>
                <h1>
                  {repo.title}
                </h1>
                <p>{repo.description}</p>
              </div>
            <Projects />
        </a>
      ))} */}
    </div>
    )
}

export default ProjectsList
