import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Skills from './Skills'
const About = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-5">Hi! I am Joldon</h1>
        <p className="lead">I am a full stack web developer with a professional background in political science and a research-oriented and analytical mindset.</p>
        <hr className="my-2" />
        <p>I develop projects using the MERN stack</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </Jumbotron>
    </div>
  );
};

export default About;
