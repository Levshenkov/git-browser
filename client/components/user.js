import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => {
  const { name, list } = props
  return (
    <div>
      <div>
        {list.map((repo) => (
          <div>
            <Link to={`/${name}/${repo}`}>{repo}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

User.propTypes = {}

export default React.memo(User)
