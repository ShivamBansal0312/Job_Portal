import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "../assets/style/hotjob.css"

const Hotjobs = () => {
  return (
    <div className="hotjobs">
      <Container>
        <h2>Hot Jobs</h2>
        <Row>
          <Col>
            <div className="hotjob-section">
              <h4>LAD Software Solution pvt.ltd</h4>
              <p>Marketing</p>
              <h4>Experience</h4>
              <p>Location:Jaipur/kochi/Delhi</p>
            </div>
          </Col>
          <Col>
            <div className="hotjob-section">
              <h4>LAD Software Solution pvt.ltd</h4>
              <p>Marketing</p>
              <h4>Experience</h4>
              <p>Location:Jaipur/kochi/Delhi</p>
            </div>
          </Col>
          <Col>
            <div className="hotjob-section">
              <h4>LAD Software Solution pvt.ltd</h4>
              <p>Marketing</p>
              <h4>Experience</h4>
              <p>Location:Jaipur/kochi/Delhi</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hotjobs
