import React from 'react'
import '../custom.scss'
import '../App.css'

import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';



const Skills = () => {
    return (
        <div className='Skillcard bg-black'>
            <Row>
            <Col sm="6">
                <Card body>
                <CardTitle tag="h5">Skills</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                
                </Card>
            </Col>
            </Row>
        </div>
    )
}

export default Skills
