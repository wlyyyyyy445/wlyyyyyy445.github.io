import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'

function About() {
  return (
    <Jumbotron fluid id='about'>
      <Container fluid>
        <Row className='justify-content-md-center'>
          <Col md={10} sm={12} className='mt-3'>
            <Row>
              <Col md={4} xs={12}>
                <div style={{ display: 'block' }}>
                  <img className='portrait' src='./assets/profile_placeholder.svg' alt='Profile' />
                  <h3 className='text-center'>Research Engineer</h3>
                  <h4 className='text-center'>Flexible Electronics & Robotics</h4>
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
