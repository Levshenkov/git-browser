import React from 'react'
import Markdown from 'markdown-to-jsx'

const Repos = (props) => {
  const { data } = props

  return (
    <div>
      <div className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
        README.md:
      </div>
      <Markdown id="description" className="mb3 pl-3">
        {data}
      </Markdown>
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
