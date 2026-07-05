import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import { useLanguage } from './i18n/LanguageContext'

function About() {
  const { t } = useLanguage()
  return (
    <Jumbotron fluid id='about' style={{ background: '#ffffff', marginBottom: 0, paddingTop: '5rem' }}>
      <Container fluid>
        <Row className='justify-content-md-center'>
          <Col md={10} sm={12} className='mt-3'>
            <Row>
              <Col md={4} xs={12}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '-2rem' }}>
                  <img className='portrait' src='./assets/profile.jpg' alt='Luyao Wang' />
                  <h3 style={{ marginLeft: '2rem' }}>{t.brand}</h3>
                </div>
              </Col>
              <Col md={8} xs={12}>
                <h1>{t.about.heading}</h1>
                <p className='lead'>{t.about.bio1}</p>
                <p className='lead'>{t.about.bio2}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
export default About
