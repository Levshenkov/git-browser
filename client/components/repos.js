import React, { useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setReadme } from '../redux/reducers/repositories'

const Repos = () => {
  const readme = useSelector((store) => store.repositories.readme)
  const { username, repositoryname } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setReadme(username, repositoryname))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repositoryname])
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
        README.md:
      </div>
      <Markdown id="description" className="mb3 pl-3">
        {readme}
      </Markdown>
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
