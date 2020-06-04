import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import User from './user'
import Repos from './repos'
import InputView from './inputview'
import Dummy from './dummy-view'

const Home = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <InputView />} />
        <Route exact path="/:username" component={() => <User />} />
        <Route exact path="/:username/:repositoryname" component={() => <Repos />} />
        <Route exact path="/*" component={() => <Dummy />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
