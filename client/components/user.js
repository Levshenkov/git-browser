import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setRepositories, updateUsername } from '../redux/reducers/repositories'

const User = () => {
  const username = useSelector((store) => store.repositories.username)
  const repos = useSelector((store) => store.repositories.list)
  const { username: userNameParams } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRepositories(userNameParams))
    dispatch(updateUsername(userNameParams))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userNameParams])
  return (
    <div>
      <div className="list-reset flex flex-col">
        {repos.map((repo) => (
          <div className="relative -mb-px block border p-3 border-grey-700">
            <div className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
              <Link to={`/${username}/${repo}`}>{repo}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

User.propTypes = {}

export default React.memo(User)
