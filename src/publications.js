import React, { Component } from 'react'

class Publication extends Component {
  render() {
    const { data } = this.props
    const titleEl = data.doi
      ? (<a className='title' href={'http://dx.doi.org/' + data.doi} target='_blank' rel='noopener noreferrer'>{data.title}</a>)
      : (<span className='title'>{data.title}</span>)

    const authorsEl = data.authors
      ? <p className='authors'>{data.authors.join(', ')}</p>
      : null

    const journalEl = data.journal
      ? <p className='p-journal'><span className='journal'>{data.journal}</span>{data.year ? <span>, <span className='year'>{data.year}</span></span> : null}</p>
      : null

    return (
      <li>
        {titleEl}
        {authorsEl}
        {journalEl}
      </li>
    )
  }
}

class Publications extends Component {
  render() {
    if (this.props.data && this.props.data.length > 0) {
      return (
        <section>
          <ol>
            {this.props.data.map((pub, i) => <Publication data={pub} key={i} />)}
          </ol>
        </section>
      )
    } else {
      return (
        <section>
          <p className='lead'>Selected manuscripts and publications will be updated here.</p>
          <ul>
            <li>Flexible tactile sensing and robotic feedback, manuscript in preparation.</li>
            <li>AI-assisted sensor data analysis, project report in progress.</li>
          </ul>
        </section>
      )
    }
  }
}

export default Publications
export { Publications, Publication }
