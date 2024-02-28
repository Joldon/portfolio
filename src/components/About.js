import React from "react";
import { Jumbotron, Button } from "reactstrap";
const About = (props) => {
  return (
    <div>
      <br />
      <br />
      <Jumbotron className="text-white">
        {/* <h1 className="display-5">Hi! I am Joldon</h1> */}
        <p className="lead">
          I am a full stack web developer with a professional background in
          political science and a research-oriented and analytical mindset.
        </p>
        <p className="lead">
          <Button
            color="primary"
            href="https://www.linkedin.com/in/joldon-kutmanaliev/"
          >
            LinkedIn
          </Button>
        </p>
        <hr className="my-2" />
        <br />
        <p>
          <h3>Tech Stack</h3>
          <h5>
            JavaScript, React, Python, SQL, Node JS, TypeScript, Pandas, Tableau
          </h5>
        </p>
        {/* <p>Software Developer and Data Analyst  with a professional background in political science</p> */}
      </Jumbotron>
      <br />
      <br />
      <div>
        <h1>Projects</h1>
      </div>
    </div>
  );
};

export default About;
