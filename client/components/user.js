import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => {
  const { name, list } = props
  return (
    <div>
      <div className="list-reset flex flex-col">
        {list.map((repo) => (
          <div className="relative -mb-px block border p-3 border-grey-700">
            <div className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
              <Link to={`/${name}/${repo}`}>{repo}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

User.propTypes = {}

export default React.memo(User)
