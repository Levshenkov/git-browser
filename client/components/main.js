import React from 'react'

import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <Link to="/dashboard/profile/4ab8b240-23a8-42e3-9a0a-6db723849ea7">Go To Profile</Link>
          <Link to="/dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

MainPage.propTypes = {}

export default MainPage
