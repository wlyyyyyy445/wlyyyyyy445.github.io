import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav
} from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGoogle
} from '@fortawesome/free-brands-svg-icons'
import './App.css'

// individual sections
import About from './about'
import { Publications } from './publications'
import './publications.css'
import Projects from './projects'
import Softwares from './softwares'

class NavLink extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    const targetId = this.props.href.slice(1)
    const el = document.getElementById(targetId)
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = el.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - 72
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  render() {
    return <a className='nav-link' href={this.props.href} onClick={(e) => this.handleClick(e)}>{this.props.name}</a>
  }
}

// navbar with scrollspy
const navbar = (
  <Navbar fixed='top' variant='dark' style={{ backgroundColor: '#2c3e50' }} expand='sm'>
    <Navbar.Brand href='#'>Research Engineer</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Scrollspy
        items={['about', 'research', 'projects', 'softwares', 'publications', 'contact']}
        offset={-72}
        currentClassName='nav-item active'
        className='navbar-nav mr-auto'
      >
        <Nav.Item as='li'>
          <NavLink href='#about' name='About' />
        </Nav.Item>
        <Nav.Item as='li'>
          <NavLink href='#research' name='Research' />
        </Nav.Item>
        <Nav.Item as='li'>
          <NavLink href='#projects' name='Projects' />
        </Nav.Item>
        <Nav.Item as='li'>
          <NavLink href='#softwares' name='Software' />
        </Nav.Item>
        <Nav.Item as='li'>
          <NavLink href='#publications' name='Publications' />
        </Nav.Item>
        <Nav.Item as='li'>
          <NavLink href='#contact' name='Contact' />
        </Nav.Item>
      </Scrollspy>
    </Navbar.Collapse>
  </Navbar>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resumeData: null,
      pubData: null,
      softwareData: null,
      projData: null
    }
  }

  getResumeData() {
    fetch('./assets/resumeData.json').then(response => {
      if (response.ok) return response.json()
      throw new Error('Something went wrong when fetching data ...')
    }).then(data => this.setState({ resumeData: data }))
  }

  getPublicationData() {
    fetch('./assets/publications.json').then(response => {
      if (response.ok) return response.json()
      throw new Error('Something went wrong when fetching data ...')
    }).then(data => this.setState({ pubData: data }))
  }

  getProjectData() {
    fetch('./assets/projects.json').then(response => {
      if (response.ok) return response.json()
      throw new Error('Something went wrong when fetching data ...')
    }).then(data => this.setState({ projData: data }))
  }

  getSoftwareData() {
    fetch('./assets/softwares.json').then(response => {
      if (response.ok) return response.json()
      throw new Error('Something went wrong when fetching data ...')
    }).then(data => this.setState({ softwareData: data }))
  }

  componentDidMount() {
    this.getResumeData()
    this.getPublicationData()
    this.getProjectData()
    this.getSoftwareData()
  }

  render() {
    return (
      <div>
        {navbar}
        <About />
        <Container fluid={true}>
          <Row id='research' className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>Research Interests</h1>
              <ul className='lead'>
                <li>Flexible electronics and wearable sensors</li>
                <li>Electronic skin and tactile sensing</li>
                <li>Stick-slip sensing and contact state recognition</li>
                <li>Robot tactile feedback and dexterous manipulation</li>
                <li>Embedded signal acquisition with ESP32-C3 and precision ADCs</li>
                <li>Computer vision and YOLO-based industrial inspection</li>
                <li>ROS2, MoveIt, Gazebo, and robot digital twins</li>
                <li>AI-driven sensor data analysis</li>
              </ul>
            </Col>
          </Row>
          <Row id='projects' className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>Selected Projects</h1>
              <Projects data={this.state.projData} />
            </Col>
          </Row>
          <Row id='softwares' className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>Software & Tools</h1>
              <Softwares data={this.state.softwareData} />
            </Col>
          </Row>
          <Row id='publications' className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>Publications</h1>
              <Publications data={this.state.pubData} />
            </Col>
          </Row>
          <Row id='contact' className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>Contact</h1>
              <p className='lead'>Email: your.email@example.com</p>
              <p className='lead'>GitHub: <a href='https://github.com/wyyyyyyy445' target='_blank' rel='noopener noreferrer'>wyyyyyyy445</a></p>
              <p className='lead'>Google Scholar: To be added</p>
              <p className='lead'>LinkedIn: To be added</p>
            </Col>
          </Row>
        </Container>
        <footer className='py-5'>
          <Container>
            <ul className='social-links text-center'>
              <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/wyyyyyyy445' title='GitHub'><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><span title='Google Scholar' style={{cursor:'default'}}><FontAwesomeIcon icon={faGoogle} /></span></li>
            </ul>
            <p className='m-0 text-center text-white'>All rights reserved.</p>
          </Container>
        </footer>
      </div>
    )
  }
}

export default App
