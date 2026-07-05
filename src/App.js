import React, { Component, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGoogle
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'

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

function LanguageSwitcher() {
  const { lang, setLang, t, supportedLangs } = useLanguage()
  return (
    <NavDropdown
      title={
        <span className='lang-switch-btn'>
          <FontAwesomeIcon icon={faGlobe} className='lang-icon' /> <span className='lang-label'>{t.languages[lang]}</span>
        </span>
      }
      id='lang-dropdown'
      alignRight
    >
      {supportedLangs.map(code => (
        <NavDropdown.Item
          key={code}
          active={lang === code}
          onClick={() => setLang(code)}
          style={{ fontSize: '0.85rem', fontWeight: lang === code ? 700 : 400 }}
        >
          {t.languages[code]}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  )
}

function AppNavbar() {
  const { t } = useLanguage()
  const nav = t.nav
  return (
    <Navbar fixed='top' variant='light' style={{ background: 'rgba(255,255,255,0.92)', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)' }} expand='md'>
      <Navbar.Brand href='#' style={{ color: '#7d9bb5', fontWeight: 700, fontSize: '1.35rem', letterSpacing: '-0.3px' }}>{t.brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Scrollspy
          items={['about', 'research', 'projects', 'softwares', 'publications', 'contact']}
          offset={-72}
          currentClassName='nav-item active'
          className='navbar-nav mr-auto'
        >
          <Nav.Item as='li'><NavLink href='#about' name={nav.about} /></Nav.Item>
          <Nav.Item as='li'><NavLink href='#research' name={nav.research} /></Nav.Item>
          <Nav.Item as='li'><NavLink href='#projects' name={nav.projects} /></Nav.Item>
          <Nav.Item as='li'><NavLink href='#softwares' name={nav.software} /></Nav.Item>
          <Nav.Item as='li'><NavLink href='#publications' name={nav.publications} /></Nav.Item>
          <Nav.Item as='li'><NavLink href='#contact' name={nav.contact} /></Nav.Item>
        </Scrollspy>
        <div className='lang-switch-wrapper'><LanguageSwitcher /></div>
      </Navbar.Collapse>
    </Navbar>
  )
}

function AppContent() {
  const { t, lang } = useLanguage()

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <div>
      <AppNavbar />
      <About />
      <div className='section-white'>
        <Container fluid={true}>
          <Row id='research' className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>{t.research.heading}</h1>
              <ul className='lead'>
                {t.research.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='section-warm'>
        <Container fluid={true}>
          <Row id='projects' className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>{t.projects.heading}</h1>
              <Projects data={t.projects.items} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='section-white'>
        <Container fluid={true}>
          <Row id='softwares' className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>{t.software.heading}</h1>
              <Softwares data={t.software.items} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='section-warm'>
        <Container fluid={true}>
          <Row id='publications' className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>{t.publications.heading}</h1>
              <Publications data={t.publications} />
            </Col>
          </Row>
        </Container>
      </div>
      <div id='contact' className='contact-section'>
        <Container fluid={true}>
          <Row className='justify-content-md-center'>
            <Col md={10} sm={12}>
              <h1>{t.contact.heading}</h1>
              <p className='lead'>{t.contact.emailLabel} <a href='mailto:2023212283@stu.hit.edu.cn'>2023212283@stu.hit.edu.cn</a></p>
              <p className='lead'>{t.contact.githubLabel} <a href='https://github.com/wyyyyyyy445' target='_blank' rel='noopener noreferrer'>wyyyyyyy445</a></p>
              <p className='lead'>{t.contact.scholarLabel} {t.contact.toBeAdded}</p>
              <p className='lead'>{t.contact.linkedinLabel} {t.contact.toBeAdded}</p>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className='py-5'>
        <Container>
          <ul className='social-links text-center'>
            <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/wyyyyyyy445' title='GitHub'><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><span title='Google Scholar' style={{cursor:'default'}}><FontAwesomeIcon icon={faGoogle} /></span></li>
          </ul>
          <p className='m-0 text-center'>{t.footer.copyright}</p>
        </Container>
      </footer>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    )
  }
}

export default App
