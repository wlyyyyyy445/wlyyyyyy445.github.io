import React from 'react'
import { Row } from 'react-bootstrap'

function Software({ data }) {
  const title = data.url
    ? <a href={data.url} target='_blank' rel='noopener noreferrer' className='title'>{data.title}</a>
    : <span className='title'>{data.title}</span>
  const description = <p className='description'>{data.desc}</p>

  return (
    <li className='list-inline-item'>
      {title}
      {description}
    </li>
  )
}

function Softwares({ data }) {
  if (!data || data.length === 0) return <Row />
  return (
    <Row>
      <ul>
        {data.map((item, i) => <Software data={item} key={i} />)}
      </ul>
    </Row>
  )
}

export default Softwares
