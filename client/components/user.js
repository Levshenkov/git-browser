import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Header from './header'

const User = () => {
  const { username } = useParams()
  const [repo, setRepo] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`).then((it) => {
      const ArrName = it.data.map((el) => el.name)
      setRepo(ArrName)
    })
  }, [username])

  return (
    <div>
      <Header name={username} />
      <div>
        {repo.map((it) => (
          <div>
            <Link to={`/${username}/${it}`}>{it}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

User.propTypes = {}

export default React.memo(User)
