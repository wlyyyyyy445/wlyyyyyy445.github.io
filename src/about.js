import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'

function About() {
  return (
    <Jumbotron fluid id='about' style={{ background: '#ffffff', marginBottom: 0, paddingTop: '5rem' }}>
      <Container fluid>
        <Row className='justify-content-md-center'>
          <Col md={10} sm={12} className='mt-3'>
            <Row>
              <Col md={4} xs={12}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '-2rem' }}>
                  <img className='portrait' src='./assets/profile.jpg' alt='Luyao Wang' />
                  <h3 style={{ marginLeft: '2rem' }}>Luyao Wang</h3>
                </div>
              </Col>
              <Col md={8} xs={12}>
                <h1>About</h1>
                <p className='lead'>
                  I work on integrated sensing and robotic intelligence systems, combining flexible sensors,
                  wearable electronics, signal acquisition, AI-based data analysis, robot tactile feedback,
                  and digital-twin simulation. My research bridges the gap between physical sensing hardware
                  and intelligent software systems.
                </p>
                <p className='lead'>
                  My background spans flexible electronics fabrication, embedded systems (ESP32-C3, precision ADC),
                  computer vision (YOLOv8), ROS2-based robot control and simulation (MoveIt, Gazebo), and
                  machine learning for sensor data analysis. I build practical tools and GUIs that make
                  research workflows reproducible and efficient.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
export default About
