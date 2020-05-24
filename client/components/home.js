import React, { useState, useEffect } from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import User from './user'
import Repos from './repos'
import InputView from './inputview'
import Dummy from './dummy-view'

const Home = () => {
  const { username, repositoryname } = useParams()
  const [repos, setRepos] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    if (typeof username !== 'undefined') {
      axios.get(`https://api.github.com/users/${username}/repos`).then((it) => {
        setRepos(it.data.map((repo) => repo.name))
      })
    }
    return () => {}
  }, [username])

  useEffect(() => {
    if (typeof repositoryname !== 'undefined') {
      axios
        .get(`https://api.github.com/repos/${username}/${repositoryname}/readme`)
        .then((it) => setText(atob(it.data.content)))
    }
  }, [username, repositoryname])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <InputView />} />
        <Route exact path="/:username" component={() => <User list={repos} name={username} />} />
        <Route exact path="/:username/:repositoryname" component={() => <Repos data={text} />} />
        <Route exact path="/*" component={() => <Dummy />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
