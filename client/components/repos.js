import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'markdown-to-jsx'
import Header from './header'

const Repos = () => {
  const { username, repositoryname } = useParams()
  const [text, setText] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${username}/${repositoryname}/readme`)
      .then((it) => setText(atob(it.data.content)))
  }, [username, repositoryname])

  return (
    <div>
      <Header name={username} repo={repositoryname} />
      <div>README.md:</div>
      <Markdown id="description">{text}</Markdown>
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
