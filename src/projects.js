import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'

function LiAnchorItem(props) {
  return (
    <li className='list-inline-item'>[<a href={props.link.url} target='_blank' rel='noopener noreferrer'>{props.link.type}</a>]</li>
  )
}

function Project({ data }) {
  return (
    <Col md={6} className='d-flex flex-row align-items-stretch'>
      <Card className='mb-3 shadow-sm h-md-250'>
        <Card.Header>{data.title}</Card.Header>
        {data.img && <Card.Img variant='top' src={data.img} />}
        <Card.Body className='d-flex flex-column align-items-start'>
          <div>
            {(data.tags || []).map((tag, i) => <Badge key={i} variant='secondary' className='mr-1'>{tag}</Badge>)}
          </div>
          <Card.Text className='mb-auto'>{data.desc}</Card.Text>
          {(data.links && data.links.length > 0) && (
            <ul className='list-unstyled list-inline'>
              {data.links.map((link, i) => <LiAnchorItem key={i} link={link} />)}
            </ul>
          )}
        </Card.Body>
      </Card>
    </Col>
  )
}

function Projects({ data }) {
  if (!data || data.length === 0) return <Row />
  const cards = []
  for (let i = 0; i < data.length; i++) {
    cards.push(<Project data={data[i]} key={i} />)
    if (i % 2 === 1) cards.push(<div key={'w-' + i} className='w-100' />)
  }
  return <Row>{cards}</Row>
}

export default Projects
