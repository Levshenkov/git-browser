import React from 'react'
import Markdown from 'markdown-to-jsx'

const Repos = (props) => {
  const { data } = props

  return (
    <div>
      <div>README.md:</div>
      <Markdown id="description">{data}</Markdown>
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
