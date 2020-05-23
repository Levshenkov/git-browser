import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <div id="repository-name">{props.repo || props.name || 'Welcome to Git-Search App'}</div>
      </div>
      {props.name && (
        <div id="go-back">
          <Link to="/">Go Back</Link>
        </div>
      )}
      {props.repo && (
        <div id="go-repository-list">
          <Link to={`/${props.name}`}>Go to repos list</Link>
        </div>
      )}
    </nav>
  )
}

export default React.memo(Header)
