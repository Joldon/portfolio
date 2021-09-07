import React from 'react';
import '../App.css'
import '../custom.scss'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
const Projects = (props) => {
  return (
    <CardGroup>
      <Card className="text-white bg-black color-light border-success">
        {/* <CardImg className="img-fluid" top width="100%" src="../assets/world-map.jpg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button type='button' className='btn me-md-2' href='https://map-stories.netlify.app/'>live</Button>
          <Button type='button' href='https://github.com/Joshchae/platform_frontend'>code</Button>
        </CardBody>
      </Card>
      <Card className="text-white bg-black border-success">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button type='button' className='btn me-md-2' href='https://map-stories.netlify.app/'>live</Button>
          <Button type='button' href='https://github.com/Joshchae/platform_frontend'>code</Button>
        </CardBody>
      </Card>
      <Card className="text-white bg-success border-white">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="text-white bg-black">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
    
  );
};

export default Projects;