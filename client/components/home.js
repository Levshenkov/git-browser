import React, { useState } from 'react'
import Header from './header'
import { history } from '../redux'

const Home = () => {
  const [value, setValue] = useState()
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-black font-bold rounded-lg border shadow-lg p-10">
          <div>
            <input
              id="input-field"
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
              }}
            />
          </div>
          <div>
            <button id="search-button" type="button" onClick={() => history.push(`/${value}`)}>
              Search GIT user
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
