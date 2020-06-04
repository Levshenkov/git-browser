import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUsername } from '../redux/reducers/repositories'
import { history } from '../redux'

const InputView = () => {
  const dispatch = useDispatch()
  const username = useSelector((store) => store.repositories.username)
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center border-b border-b-5 border-gray-700 py-1">
          <div>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Git user"
              id="input-field"
              value={username}
              onChange={(e) => {
                dispatch(updateUsername(e.target.value))
              }}
            />
          </div>
          <div className="flex items-center justify-center text-white">
            <button
              className="flex-shrink-0 border-transparent border-4 bg-gray-700 text-gray-400 hover:bg-gray-800 text-sm py-1 px-2 rounded"
              type="button"
              id="search-button"
              onClick={() => history.push(`/${username}`)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

InputView.propTypes = {}

export default React.memo(InputView)
