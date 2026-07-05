import React from 'react'

function Publication({ data }) {
  const titleEl = data.doi
    ? (<a className='title' href={'http://dx.doi.org/' + data.doi} target='_blank' rel='noopener noreferrer'>{data.title}</a>)
    : (<span className='title'>{data.title}</span>)

  const authorsEl = data.authors
    ? <p className='authors'>{data.authors.join(', ')}</p>
    : null

  const journalEl = data.journal
    ? <p className='p-journal'><span className='journal'>{data.journal}</span>{data.year ? <span>, <span className='year'>{data.year}</span></span> : null}{data.note ? <span className='note'> ({data.note})</span> : null}</p>
    : null

  return (
    <li>
      {titleEl}
      {authorsEl}
      {journalEl}
    </li>
  )
}

function Publications({ data }) {
  if (!data) return null

  // data is the entire publications section from translations
  const items = data.items
  if (items && items.length > 0) {
    return (
      <section>
        <ol>
          {items.map((pub, i) => <Publication data={pub} key={i} />)}
        </ol>
      </section>
    )
  } else {
    return (
      <section>
        <p className='lead'>{data.empty || 'Selected manuscripts and publications will be updated here.'}</p>
      </section>
    )
  }
}

export default Publications
export { Publications, Publication }
