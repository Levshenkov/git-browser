import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { username, repositoryname } = useParams()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-gray-400 mr-6">
        <div id="repository-name">{repositoryname || username || 'Welcome to Git Browser'}</div>
      </div>
      <div className="flex justify-end text-gray-400">
        {username && (
          <div id="go-back">
            <Link to="/" className="mr-3">
              Go to main page
            </Link>
          </div>
        )}
        {repositoryname && (
          <div id="go-repository-list">
            <Link to={`/${username}`}>Go to repos list</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default React.memo(Header)
